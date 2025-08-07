import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, type ReactNode, } from "react";
import { useState } from "react";
import { auth } from "../services/firebaseConnection";

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextData {
    user: UserProps | null;
    signed: boolean;
    loadingAuth: boolean;
    handleInfoUser: ({ uid, name, email }: UserProps) => void;
}

interface UserProps {
    uid: string;
    name: null | string;
    email: null | string;
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
    const [loadingAuth, setLoadingAuth] = useState(true);
    const [user, setUser] = useState<UserProps | null>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    name: user?.displayName,
                    email: user?.email
                })
                setLoadingAuth(false)
            } else {
                setUser(null)
                setLoadingAuth(false)
            }
        })

        return () => {
            unsub()
        }
    }, [])

    function handleInfoUser({ uid, name, email }: UserProps) {
        setUser({
            uid,
            name,
            email
        })
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            loadingAuth,
            user,
            handleInfoUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;