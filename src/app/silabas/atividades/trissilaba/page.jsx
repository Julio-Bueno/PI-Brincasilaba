'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const fases = [
  { palavra: "PIPOCA", silabas: ["PI", "PO", "CA", "PA", "CO", "PI"] },
  { palavra: "MACACO", silabas: ["MA", "CA", "CO", "MO", "LU"] },
  { palavra: "SORVETE", silabas: ["SOR", "VE", "TE", "SO", "RE"] },
]

export default function Trissilaba(){

    const [faseAtual, setFaseAtual] = useState(0);
    const [silabasEmbaralhadas, setSilabasEmbaralhadas] = useState([]);
    const [selecionada, setSelecionada] = useState([]);
    const [feedback, setFeedback] = useState("");

    {/* Embaralha as sílabas */}
    useEffect(() => {
        embaralhar();
    }, [faseAtual])

    function embaralhar(){
        const nova = [...fases[faseAtual].silabas].sort(() => Math.random() - 0.5);
        setSilabasEmbaralhadas(nova)
    }

    function selecionarSilaba(s){
        if(selecionada.length >= 3) return;
        setFeedback("");

        setSelecionada((prev) => [...prev, s]);
    }

    {/* Checa se formou a palavra correta */}
    function checar(){
        const palavraFormada = selecionada.join("");
        if (palavraFormada === fases[faseAtual].palavra) {
          setFeedback("🎉 Acertou!");
            setTimeout(() => {
                proximaFase();
                }, 1500);
        } else {
        setFeedback("❌ Palavra incorreta");
        }
    }
    
    function proximaFase(){
        if(faseAtual < fases.length -1){
            setFaseAtual(faseAtual + 1);
        } else {
            setFeedback("🎉 Parabéns! Você completou todas as fases!");
        }
        setSelecionada([]);
    }    
    function reset(){
        setSelecionada([]);
        setFeedback("");
        embaralhar();
    }

    return(
        <div className="flex flex-col items-center justify-center h-screen bg-[url('/img/background.png')] bg-cover text-white">
      
      {/* Título */}
      <div className="bg-white text-black p-6 rounded-xl text-2xl mb-6">
        Fase {faseAtual + 1}: Forme a palavra correta
      </div>

      {/* Sílabas */}
      <div className="flex flex-col space-y-4 mb-10">
        {silabasEmbaralhadas.map((s, index) => (
          <motion.button
            key={index}
            onClick={() => selecionarSilaba(s)}
            whileTap={{ scale: 1.15 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-500 text-white text-3xl px-10 py-4 rounded-xl shadow-lg"
          >
            {s}
          </motion.button>
        ))}
      </div>

      {/* Quadro central com animação das sílabas */}
      <div className="bg-white text-black w-64 h-32 rounded-xl flex items-center justify-center text-4xl mb-6 overflow-hidden">
        <AnimatePresence>
          {selecionada.map((s, index) => (
            <motion.div
              key={index}
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mx-2"
            >
              {s}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Feedback */}
      {feedback && (
        <div className="text-2xl mb-4">
          {feedback}
        </div>
      )}

      {/* Botões */}
      <div className="flex space-x-4">
        <button
          onClick={checar}
          className="bg-green-500 px-6 py-3 rounded-lg text-xl hover:bg-green-600"
        >
          Checar
        </button>

        <button
          onClick={reset}
          className="bg-yellow-400 px-6 py-3 rounded-lg text-xl text-black hover:bg-yellow-500"
        >
          Resetar
        </button>
      </div>

    </div>
    )
}