import { MdOutlineMapsHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { Input } from "../../components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function Register() {

    const schema = z.object({
        name: z.string().nonempty("O campo nome é obrigatório"),
        email: z.string().email("Insira um email válido").nonempty("O campo email é obrigatório"),
        password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres').nonempty("O campo senha é obrigatório")
    })

    type FormData = z.infer<typeof schema>;

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    function onSubmit(data: FormData) {
        console.log(data)
    }

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

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="px-4">
                    <div className="mb-4">
                        <label className="font-medium">Nome</label>
                        <Input
                            type="text"
                            placeholder="Seu nome"
                            name="name"
                            register={register}
                            errors={errors.name?.message}
                        />
                    </div>
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
                        Cadastrar-se
                    </button>
                </form>

                <p className="text-center my-4 text-zinc-600">Já possui uma conta? <Link to='/login' className="text-orange-600 cursor-pointer">Entre aqui.</Link> </p>
            </main>
        </section>
    )
}