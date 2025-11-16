export default function SilabaHomePage(){
    return(
        <div className="flex items-center justify-center h-screen bg-[url('/img/background.png')] bg-cover">
            <div className = "bg-white p-10 rounded-lg text-black text-3xl">
                Escolha sua atividade: <br/>
                <div>
                    <lu className = "mt-4 text-lg">
                        <button className = "bg-white border-2 px-2 rounded-lg border-blue-500 hover:bg-gray-700 transition dutation-300 mr-3"><a href = "/silabas/atividades/duas"> Dissílabas</a></button>
                        <button className = "bg-white border-2 px-2 rounded-lg border-blue-500 hover:bg-gray-700 transition dutation-300 mr-3"><a href = "/silabas/atividades/tres"> Trissílabas</a><br/></button>
                        <button className = "bg-white border-2 px-2 rounded-lg border-blue-500 hover:bg-gray-700 transition dutation-300"><a href = "/silabas/atividades/quatro"> Polissílabas</a><br/></button>
                    </lu>
                </div>
            </div>            
        </div>
    )
}