import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className = "flex items-center justify-center h-150 text-6xl font-bold block ">
        BrincaSilaba
      </div>
      <Link href = "../register" className = "flex items-center justify-center">
        <button className="px-4 py-2 bg-white text-black text-4xl rounded hover:bg-gray-700 transition duration-300) block"> 
          Cadastre-se!
        </button></Link>
      <Link href = "../login" className = "flex items-center justify-center pt-4">
        <button className="px-4 py-2 bg-white text-black text-4xl rounded hover:bg-gray-700 transition dutation-300 ">
        Entrar 
        </button>
      </Link>
    </>
  );
}
