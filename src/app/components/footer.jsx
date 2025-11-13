
import Image from "next/image"
import Link from "next/link"

export function Footer(){
    return (
    <div className="display flex justify-center bg-blue-400 mt-10">
        <footer className = "display flex justify-center items-center text-center text-black gap-10 bottom-0 w-full h-20 bg-blue-500">
            <Link href = "/" >
                <Image src = "/logo-footer.svg" alt = "Brincando com Silabas" width={250} height={250} ></Image>
            </Link>
            <div className = "">
                Este site foi criado <br/> para apoiar educadores com <br/> materiais de uso pedagógico.
            </div>
        </footer>
    </div>
    );
}