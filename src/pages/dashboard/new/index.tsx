import { FiTrash } from "react-icons/fi";
import { Container } from "../../../components/container";
import { DashboardHeader } from "../../../components/dashboardHeader";
import { MdOutlineFileUpload } from "react-icons/md";
import { Input } from "../../../components/input";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
    title: z.string().nonempty('O título é obrigatório'),
    road: z.string().nonempty('A rua é obrigatória'),
    zone: z.string().nonempty('O bairro é obrigatório'),
    city: z.string().nonempty('A cidade é obrigatória'),
    state: z.string().nonempty('O estado é obrigatório'),
    price: z.string().nonempty('O preço é obrigatório'),
    rooms: z.string().nonempty('A quantidade de quartos é obrigatório'),
    bathrooms: z.string().nonempty('A quantidade de banheiros é obrigatório'),
    size: z.string().nonempty('Os metros quadrados são obrigatórios'),
    garage: z.string().nonempty('A quantidade de vagas na garagem é obrigatório'),
    type: z.string().nonempty('O tipo de imóvel é obrigatório'),
    whatsapp: z.string().min(1, "O campo WhatsApp é obrigatório").refine((value) => /^(\d{11,12})$/.test(value), {
        message: "Número de telefone inválido.",
    }),
    description: z.string().nonempty("A descrição é obrigatória"),
})

type FormData = z.infer<typeof schema>

export function New() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange'
    })

    return (
        <Container>
            <DashboardHeader />

            <div className="w-full bg-zinc-100/60 mb-2 p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
                <button className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer border-gray-600 h-32">
                    <div className="absolute cursor-pointer">
                        <MdOutlineFileUpload size={40} className="text-gray-600" />
                    </div>
                    <div className="cursor-pointer">
                        <input
                            type='file'
                            accept="image/*"
                            className="opacity-0 cursor-pointer"
                        />
                    </div>
                </button>

                <div className="w-full h-32 flex items-center justify-center relative">
                    <button className="absolute cursor-pointer hover:scale-103 transition-all">
                        <FiTrash size={28} color='#fff' />
                    </button>
                    <img
                        src="data:image/jpeg;base64,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"
                        className="h-32 rounded-lg w-full object-cover"
                    />
                </div>
            </div>

            <div className="w-full bg-zinc-100/60 rounded-lg flex flex-col sm:flex-row items-center gap-2 mr-2 mb-4 p-4">
                <form className="w-full">
                    <div className="mb-3">
                        <p className="font-medium mb-2">Título</p>
                        <Input
                            type="text"
                            name="title"
                            placeholder="Ex.: Casa moderna no Jardins"
                            register={register}
                            errors={errors.title?.message}
                        />
                    </div>
                    <div className="mb-3 flex w-full items-center flex-row gap-4">
                        <div className="w-full">
                            <p className="font-medium mb-2">Rua</p>
                            <Input
                                type="text"
                                name="road"
                                placeholder="Ex.: Rua Augusta"
                                register={register}
                                errors={errors.road?.message}
                            />
                        </div>
                        <div className="w-full">
                            <p className="font-medium mb-2">Bairro</p>
                            <Input
                                type="text"
                                name="zone"
                                placeholder="Ex.: Jardins"
                                register={register}
                                errors={errors.zone?.message}
                            />
                        </div>
                    </div>
                    <div className="mb-3 flex w-full items-center flex-row gap-4">
                        <div className="w-full">
                            <p className="font-medium mb-2">Cidade</p>
                            <Input
                                type="text"
                                name="city"
                                placeholder="Ex.: São Paulo"
                                register={register}
                                errors={errors.city?.message}
                            />
                        </div>
                        <div className="w-full">
                            <p className="font-medium mb-2">Estado</p>
                            <Input
                                type="text"
                                name="state"
                                placeholder="Ex.: SP"
                                register={register}
                                errors={errors.state?.message}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <p className="font-medium mb-2">Preço</p>
                        <Input
                            type="text"
                            name="price"
                            placeholder="Ex.: R$ 850.000"
                            register={register}
                            errors={errors.price?.message}
                        />
                    </div>
                    <div className="mb-3 flex w-full items-center flex-row gap-4">
                        <div className="w-full">
                            <p className="font-medium mb-2">Nº de quartos</p>
                            <Input
                                type="text"
                                name="rooms"
                                placeholder="Ex.: 3 Quartos"
                                register={register}
                                errors={errors.rooms?.message}
                            />
                        </div>
                        <div className="w-full">
                            <p className="font-medium mb-2">Nº de banheiros</p>
                            <Input
                                type="text"
                                name="bathrooms"
                                placeholder="Ex.: 2 Banheiros"
                                register={register}
                                errors={errors.bathrooms?.message}
                            />
                        </div>
                    </div>
                    <div className="mb-3 flex w-full items-center flex-row gap-4">
                        <div className="w-full">
                            <p className="font-medium mb-2">Metros quadrados</p>
                            <Input
                                type="text"
                                name="size"
                                placeholder="Ex.: 85 m²"
                                register={register}
                                errors={errors.size?.message}
                            />
                        </div>
                        <div className="w-full">
                            <p className="font-medium mb-2">Nº de vagas</p>
                            <Input
                                type="text"
                                name="garage"
                                placeholder="Ex.: 1 Vaga"
                                register={register}
                                errors={errors.garage?.message}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <p className="font-medium mb-2">Tipo de imóvel</p>
                        <Input
                            type="text"
                            name="type"
                            placeholder="Ex.: Apartamento"
                            register={register}
                            errors={errors.type?.message}
                        />
                    </div>
                    <div className="mb-3">
                        <p className="font-medium mb-2">Whatsapp / Telefone</p>
                        <Input
                            type="text"
                            name="whatsapp"
                            placeholder="Ex.: (99) 99999-9999"
                            register={register}
                            errors={errors.whatsapp?.message}
                        />
                    </div>
                    <div className="mb-3">
                        <p className="font-medium mb-2">Whatsapp / Telefone</p>
                        <textarea
                            {...register('description')}
                            id="description"
                            placeholder="Digite aqui a descrição completa sobre seu imóvel."
                            name="description"
                            className="border-2 w-full rounded-md h-24 px-2 border-zinc-200 outline-none"
                        />
                        {errors.description && <p className="mb-1 text-red-500">{errors.description?.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="rounded-md bg-zinc-900 text-white font-medium w-full h-10 cursor-pointer hover:scale-103 transition-all"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </Container >
    )
}