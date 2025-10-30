import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className = "flex items-center justify-center">
      <div className = "flex items-center justify-center text-center w-200 text-2xl text-black bg-white rounded-2xl border-6 border-blue-500 mt-20">
        <h1 className = "flex items-center justify-center mt-3 mb-3">Quem somos!<br/>
          ☀️ Somos uma iniciativa dedicada a apoiar educadores do ensino primário e fundamental, oferecendo ferramentas de qualidade para enriquecer o processo de alfabetização e aprendizagem das crianças. <br/>
          🌈 Acreditamos que aprender pode — e deve — ser uma experiência leve, criativa e envolvente.<br/>
          🚩 Reunimos recursos pensados para facilitar o trabalho dos professores, ao mesmo tempo em que estimulamos o desenvolvimento das crianças de forma lúdica e significativa.<br/>
          ⭐ Nosso propósito é ser um aliado na construção dos primeiros passos do conhecimento, fortalecendo a base da leitura, escrita e raciocínio, sempre com o olhar atento ao que cada criança precisa para crescer com confiança e autonomia.<br/>
          🟨 Aqui, você faz cada material com carinho e dedicação, para que o educador tenha mais tempo para o que realmente importa: inspirar e transformar vidas através da educação.<br/>
          👩🏻‍🏫
        </h1>
      </div>
    </div>

    <Link href = "../register" className = "flex items-center justify-center mt-10">
      <button className="px-4 py-2 bg-white text-black text-4xl rounded hover:bg-gray-700 transition duration-300) border-3 border-blue-500 rounded-2xl block"> 
        Cadastre-se!
      </button></Link>
    <Link href = "../login" className = "flex items-center justify-center pt-4">
      <button className="px-4 py-2 bg-white text-black text-4xl rounded hover:bg-gray-700 transition dutation-300 border-3 border-blue-500 rounded-2xl">
      Entrar 
      </button>
    </Link>
    </>
  );
}
