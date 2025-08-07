import { MdOutlineMapsHomeWork } from "react-icons/md";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

export function Header() {
    const { signed, loadingAuth } = useContext(AuthContext);

    return (
        <div className="bg-white flex items-center justify-center h-16 max-w-full">
            <header className="flex justify-between items-center w-full max-w-7xl mx-auto px-4">
                <Link to='/'>
                    <div className="flex items-center gap-2">
                        <MdOutlineMapsHomeWork size={38} className="text-orange-600" />
                        <h1 className="font-medium text-2xl">Morá</h1>
                    </div>
                </Link>

                {!loadingAuth && signed && (
                    <Link to='/dashboard'>
                        <div className="rounded-full border-2 border-orange-600 p-2">
                            <FaRegUser className="text-orange-600" size={26} />
                        </div>
                    </Link>
                )}

                {!loadingAuth && !signed && (
                    <Link to='/login'>
                        <div className="rounded-full border-2 border-orange-600 p-1">
                            <CgLogIn size={30} className="text-orange-600" />
                        </div>
                    </Link >
                )}

            </header>
        </div>
    )
}