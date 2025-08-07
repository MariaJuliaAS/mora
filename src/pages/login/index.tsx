import { MdOutlineMapsHomeWork } from "react-icons/md";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const schema = z.object({
    email: z.string().email("Insira um email válido").nonempty("O campo email é obrigatório"),
    password: z.string().nonempty("O campo senha é obrigatório")
})

type FormData = z.infer<typeof schema>;

export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    useEffect(() => {
        async function handleLogout() {
            await signOut(auth);
        }

        handleLogout();
    }, [])

    function onSubmit(data: FormData) {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((user) => {
                console.log(user)
                alert("Login realizado com sucesso!")
                navigate('/', { replace: true })
            }).catch((error) => {
                console.error("Erro ao logar: ", error)
                alert("Erro ao logar, verifique suas credenciais.")
            })
    }

    return (
        <section className="w-full min-h-screen flex justify-center items-center flex-col bg-zinc-100 px-6">
            <main className="bg-white rounded-lg border border-zinc-300 p-4 w-full max-w-lg shadow-xl">
                <div className="flex items-center justify-center flex-col my-4">
                    <Link to='/'>
                        <MdOutlineMapsHomeWork className="text-orange-600 mb-4 sm:text-6xl text-4xl" />
                    </Link>
                    <h1 className="font-bold sm:text-3xl text-lg">Bem-vindo de volta!</h1>
                    <span className="text-center text-zinc-600">Faça login para acessar sua conta e continuar sua busca.</span>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="px-4">
                    <div className="mb-4">
                        <label className="font-medium">E-mail</label>
                        <Input
                            type="email"
                            placeholder="seu@email.com"
                            name="email"
                            register={register}
                            errors={errors.email?.message}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="font-medium">Senha</label>
                        <Input
                            type="password"
                            placeholder="•••••••••"
                            name="password"
                            register={register}
                            errors={errors.password?.message}
                        />
                    </div>
                    <button className="rounded-lg bg-orange-600 flex items-center justify-center px-12 h-9 gap-2 text-white font-medium w-full">
                        Entrar
                    </button>
                </form>

                <p className="text-center my-4 text-zinc-600">Não tem uma conta? <Link to='/register' className="text-orange-600 cursor-pointer">Cadastre-se</Link> </p>
            </main>
        </section>
    )
}