'use client'

import { useState } from "react";

export default function AddPage(){

  const [num1, setNum1] = useState(""); //guarda o valor do primeiro input
  const [num2, setNum2] = useState(""); //guarda o valor do segundo input
  const [resultado, setResultado] = useState(null) //resultado da soma

  function somar(){
    //transforma strings em números
    const n1 = Number(num1)
    const n2 = Number(num2)

    //validar se os campos estão vazios
    if(num1 === "" && num2 === ""){
      setResultado("Por favor, preencha ambos os campos.")
      
      return
    }
    setResultado(n1 + n2)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/img/background.png')] bg-cover">
      {/* header */}
      <div className="bg-white text-black p-4 rounded-xl text-3xl mb-6 text-center">
        Vamos brincar de somar!
      </div>
      
      {/* Inputs */}
      <div className="flex flex-col bg-white text-black text-2xl p-4 rounded-xl mb-6 text-center">
        
        Coloque onúmeros que deseja somar:
        <input
        type="number"
        value={num1}
        onChange = {(e) => setNum1(e.target.value)}
        className = "border rounded-xl mb-2"></input>
        +
        <input
          type="number"
          value = {num2}
          onChange = {(e) => setNum2(e.target.value)}
          className = "border rounded-xl">
        </input>
      </div>
      
        {/* área dos botões*/}
        <button
          onClick={somar}
          className = "bg-white text-black text-2xl rounded-full px-3 py-3 mb-3 border hover:bg-gray-700 transition dutation-300">
            Somar
        </button>
      
      <div className="flex flex-col bg-white text-black p-4 rounded-xl mb-6 text-center">
        {/* área do resultado*/}
        O resultado é: <br/>
        <span className = "font-bold text-3xl">
          {resultado !== null ? resultado : "---"}
        </span>

      </div>
    </div>
  )
}