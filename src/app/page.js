

export default function Home() {
  return (
    < >
      <div  className = "flex items-center justify-center h-screen text-6xl font-bold">
        BrincaSilaba

        <a href = "../game"><button className="ml-4 px-4 py-2 bg-white text-black text-4xl rounded hover:bg-gray-700 transition duration-300 "> 
          Jogar!
        </button></a>
        
        <a href = "../about"><button className="ml-4 px-4 py-2 bg-white text-black text-4xl rounded hover:bg-gray-700 transition dutation-300 ">Sobre </button></a>
      </div>
    </>
  );
}
