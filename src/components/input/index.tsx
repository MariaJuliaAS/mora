interface InputProps {
    type: string;
    placeholder: string;
    name: string;
}

export function Input({ type, placeholder, name }: InputProps) {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className="border border-zinc-300 px-2 h-9 rounded-lg w-full my-2"
            />
        </div>
    )
}