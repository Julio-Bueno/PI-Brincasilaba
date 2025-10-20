
import Image from "next/image"
import Link from "next/link"

export function Footer(){
    return (
    <footer className = "h-20 text-center text-black mt-10">
        <Link href = "/" className = "display flex justify-center block">
            <Image src = "/logo-footer.svg" alt = "Brincando com Silabas" width={250} height={250} ></Image>
        </Link>
        <Link href = "instagram.com/brincasilaba" className = "mr-10 text-black hover:text-gray-700 transition duration-300">
            Instagram
        </Link>
    </footer>
    );
}