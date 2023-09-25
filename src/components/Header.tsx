import Image from "next/image"

import Logo from '@/assets/devMaster.svg'
import Main from '@/assets/main.png'
export function Header() {
    return (
        <header className="w-full h-18 bg-primary-blue">
            <nav className="flex justify-center">
                <Image src={Logo} alt="Imagem Logo" className="w-16"/>
                <ul className="flex items-center space-x-4 text-gray-phone">
                    <li className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"><a></a>HOME</li>
                    <li className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">QUEM SOU </li>
                    <li className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">O QUE FAÇO</li>
                    <li className=" cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">PORTFÓLIO</li>
                </ul>
            </nav>
            <div>
            <Image src={Main} alt="Imagem Main" />
        </div>
        </header>

    )
}