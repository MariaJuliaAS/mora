import { MdOutlineMapsHomeWork } from "react-icons/md";
import { CgLogIn } from "react-icons/cg";

export function Header() {
    return (
        <div className="bg-white flex items-center justify-center h-16 max-w-full">
            <header className="flex justify-between items-center w-full max-w-7xl mx-auto px-4">
                <div className="flex items-center gap-2">
                    <MdOutlineMapsHomeWork size={38} className="text-orange-600" />
                    <h1 className="font-medium text-2xl">Morá</h1>
                </div>
                <div className="rounded-full border-2 border-orange-600 p-1">
                    <CgLogIn size={30} className="text-orange-600" />
                </div>
            </header>
        </div>
    )
}