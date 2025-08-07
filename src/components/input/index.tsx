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
            />
        </div>
    )
}