import { MdOutlineMapsHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { Input } from "../../components/input";

export function Register() {
    return (
        <section className="w-full min-h-screen flex justify-center items-center flex-col bg-zinc-100 px-6">
            <main className="bg-white rounded-lg border border-zinc-300 p-4 w-full max-w-lg shadow-xl">
                <div className="flex items-center justify-center flex-col my-4">
                    <Link to='/'>
                        <MdOutlineMapsHomeWork className="text-orange-600 mb-4 sm:text-6xl text-4xl" />
                    </Link>
                    <h1 className="font-bold sm:text-3xl text-lg">Bem-vindo(a)!</h1>
                    <span className="text-center text-zinc-600">Faça sua conta para comprar ou vender imóveis.</span>
                </div>

                <form className="px-4">
                    <div className="mb-4">
                        <label className="font-medium">Nome</label>
                        <Input
                            type="text"
                            placeholder="Seu nome"
                            name="name"
                        />
                    </div>
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
                        Cadastrar-se
                    </button>
                </form>

                <p className="text-center my-4 text-zinc-600">Já possui uma conta? <Link to='/login' className="text-orange-600 cursor-pointer">Entre aqui.</Link> </p>
            </main>
        </section>
    )
}