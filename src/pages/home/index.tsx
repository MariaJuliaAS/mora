import { Container } from "../../components/container"
import { IoSearchOutline } from "react-icons/io5";

export function Home() {
    return (
        <div>
            <section className="bg-gradient-to-r from-orange-600 to-orange-700 w-full py-8 px-4 flex items-center flex-col">
                <div className="max-w-2xl mx-auto flex items-center flex-col pb-4">
                    <h1 className="text-white font-bold text-3xl text-center sm:text-5xl">Encontre o imóvel perfeito</h1>
                    <p className="text-white sm:text-xl text-base text-center py-2">Milhares de casas, apartamentos e terrenos com financiamento facilitado e documentação completa</p>
                </div>

                <div className="bg-white rounded-md w-full max-w-5xl flex items-center p-4 gap-6">
                    <input
                        type="text"
                        placeholder="Procure por tipo ou cidades..."
                        className="border border-zinc-400 px-2 h-9 rounded-lg w-full"
                    />
                    <button className="rounded-lg bg-orange-600 flex items-center px-12 h-9 gap-2 text-white font-medium">
                        <IoSearchOutline size={18} className="text-white" />
                        Buscar
                    </button>
                </div>
            </section>

            <Container>
                <main>

                </main>
            </Container>
        </div>
    )
}