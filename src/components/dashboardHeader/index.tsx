import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

export function DashboardHeader() {
    async function handleLogOut() {
        await signOut(auth)
    }

    return (
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-4 rounded-lg my-3 h-10 flex items-center w-full font-medium text-white gap-4">
            <Link className="transition-all hover:scale-105" to='/dashboard'>Dashboard</Link>
            <Link className="transition-all hover:scale-105" to='/dashboard/new'>Novo imóvel</Link>

            <button onClick={handleLogOut} className="ml-auto cursor-pointer transition-all hover:scale-105">
                Sair da conta
            </button>
        </div>
    )
}