import { MdOutlineMapsHomeWork } from "react-icons/md";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";

export function Login() {
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

                <form className="px-4">
                    <div className="mb-4">
                        <label className="font-medium">E-mail</label>
                        <Input
                            type="email"
                            placeholder="seu@email.com"
                            name="email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="font-medium">Senha</label>
                        <Input
                            type="password"
                            placeholder="•••••••••"
                            name="password"
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