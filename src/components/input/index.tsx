import type { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface InputProps {
    type: string;
    placeholder: string;
    name: string;
    register: UseFormRegister<any>;
    errors?: string;
    rules?: RegisterOptions
}

export function Input({ type, placeholder, name, register, errors, rules }: InputProps) {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                id={name}
                {...register(name, rules)}
                className="border border-zinc-300 px-2 h-9 rounded-lg w-full my-2"
            />
            {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
        </div>
    )
}