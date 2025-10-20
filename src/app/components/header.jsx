
import Link from "next/link"
import  Image  from "next/image"

export function Header(){
    return (
    <header className = "display flex justify-center items-center w-200 h-15 bg-white text-black rounded-full fixed top-3">
        <div className = "display flex items-center gap-70">
            <div>
            <Link href="/"><Image src = "/logo-header.png" alt = "Logo BrincaSilaba" width = {250} height = {250} className = "mt-3 mb-3 -ml-20"/></Link>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link href = "/">Home</Link></li>
                        <li><Link href = "/Privacy"> Política e Privacidade</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}