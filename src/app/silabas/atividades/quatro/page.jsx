'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const dificuldades = [
  {
    nivel: 1,
    descricao: "Polissílabas com 4 sílabas",
    palavras:[
      { palavra: "ABACATE", silabas: ["A", "BA", "CA", "TE"] },
      { palavra: "ELEFANTE", silabas: ["E", "LE", "FAN", "TE"] },
      { palavra: "VENTILADOR", silabas: ["VEN", "TI", "LA", "DOR"] },
      { palavra: "BORBOLETA", silabas: ["BOR", "BO", "LE", "TA",] },
      { palavra: "COMPUTADOR", silabas: ["COM", "PU", "TA", "DOR"] },
    ]
  },
  {
    nivel: 2,
    descricao: "Polissílabas com 5 sílabas",
    palavras:[
      { palavra: "MATEMATICA", silabas: ["MA", "TE", "MA", "TI", "CA",] },
      { palavra: "RECUPERAÇÃO", silabas: ["RE", "CU", "PE", "RA", "ÇÃO",] },
      { palavra: "INDIFERNÇA", silabas: ["IN", "DI", "FE", "REN", "ÇA",] },
    ]
  },
  {
    nivel: 3,
    descricao: "Polissílabas com 6 sílabas",
    palavras:[
      { palavra: "SENSIBILIDADE", silabas: ["SEN", "SI", "BI", "LI", "DA", "DE",] },
      { palavra: "SOBRECARREGADO", silabas: ["SO", "BRE", "CAR", "RE", "GA", "DO"] },
      { palavra: "INTELIGÊNCIA", silabas: ["IN", "TE", "LI", "GEN", "CI", "A"] },
    ]
  }
]


/* util: embaralhar array */
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

/* util: cria id simples */
function makeId(text, i) {
  return `${text}-${i}-${Math.random().toString(36).slice(2,10)}`;
}

export default function Polissilaba() {
  const [nivel, setNivel] = useState(0);
  const [fase, setFase] = useState(0);
  const [botoes, setBotoes] = useState([]); // { id, text, used: bool }
  const [selecionadas, setSelecionadas] = useState([]); // array de { id, text }
  const [feedback, setFeedback] = useState("");

  const dadosNivel = dificuldades[nivel];
  const dadosAtual = dadosNivel.palavras[fase];
  const targetCount = dadosAtual.silabas.length; // número de sílabas necessárias
  const targetConcatenado = dadosAtual.silabas.join("");

  /* quando muda nível/fase, gerar botões embaralhados com distractores */
  useEffect(() => {
    gerarBotoes();
    setSelecionadas([]);
    setFeedback("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nivel, fase]);

  function gerarBotoes() {
    // Distratores (pode ampliar)
    const extras = ["LA", "PO", "CU", "RO", "TI", "ME", "NA", "SE", "LI", "ZA"];
    // combinar sílabas corretas + extras
    const combinado = [...dadosAtual.silabas, ...extras];
    const embaralhado = shuffle(combinado);
    // pegamos mais 7 distratores além das corretas (ajuste se quiser mais/menos)
    const sliceSize = dadosAtual.silabas.length + 10;
    const escolhidos = embaralhado.slice(0, sliceSize);

    // map para objetos com id e used = false
    const mapped = escolhidos.map((txt, i) => ({
      id: makeId(txt, i),
      text: txt,
      used: false
    }));

    setBotoes(shuffle(mapped)); // embaralha a ordem final
  }

  /* selecionar um botão: só se não usado e se ainda cabe */
  function selecionar(bot) {
    if (bot.used) return;
    if (selecionadas.length >= targetCount) return;
    setFeedback("");

    // marca como usado
    setBotoes((prev) => prev.map(b => b.id === bot.id ? { ...b, used: true } : b));
    // adiciona no final da lista de selecionadas
    setSelecionadas(prev => [...prev, { id: bot.id, text: bot.text }]);
  }

  /* remover última sílaba (caso queira desfazer) */
  function desfazer() {
    if (selecionadas.length === 0) return;
    const ultima = selecionadas[selecionadas.length - 1];
    // libera o botão correspondente
    setBotoes(prev => prev.map(b => b.id === ultima.id ? { ...b, used: false } : b));
    setSelecionadas(prev => prev.slice(0, -1));
    setFeedback("");
  }

  /* checar palavra formada */
  function checar() {
    // só checa se escolheu a quantidade correta
    if (selecionadas.length !== targetCount) {
      setFeedback(`Escolha exatamente ${targetCount} sílabas.`);
      return;
    }
    const palavraFormada = selecionadas.map(s => s.text).join("");
    if (palavraFormada === targetConcatenado) {
      setFeedback("🎉 Acertou!");

      // avançar com atraso pra permitir animação/mensagem
      setTimeout(() => {
        avancar();
      }, 1300);
    } else {
      setFeedback("❌ Palavra incorreta");
    }
  }

  /* avançar fase/nivel */
  function avancar() {
    setSelecionadas([]);
    if (fase < dadosNivel.palavras.length - 1) {
      setFase(f => f + 1);
    } else if (nivel < dificuldades.length - 1) {
      setNivel(n => n + 1);
      setFase(0);
    } else {
      setFeedback("🏆 Parabéns — você concluiu todos os níveis!");
    }
  }

  /* resetar atual (reembaralhar mesma fase) */
  function resetar() {
    gerarBotoes();
    setSelecionadas([]);
    setFeedback("");
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-20 bg-[url('/img/background.png')] bg-cover text-white">

      {/* header info */}
      <div className="bg-white text-black p-4 rounded-xl mb-6 text-center">
        <div className="font-bold text-lg">Nível {nivel + 1} — {dadosNivel.descricao}</div>
        <div className="text-sm mt-1">Palavra {fase + 1} de {dadosNivel.palavras.length}</div>
      </div>

      {/* área dos botões (sílabas disponíveis) */}
      <div className="w-full max-w-xl px-4">
        <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          {botoes.map((b) => (
            // usamos layoutId para animação compartilhada quando o item "mover" para o quadro central
            !b.used ? (
              <motion.button
                key={b.id}
                layoutId={b.id}
                onClick={() => selecionar(b)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                className="bg-blue-600 text-white text-2xl py-3 rounded-xl shadow-md"
              >
                {b.text}
              </motion.button>
            ) : (
              // quando usado, não mostramos aqui (ele aparece na área selecionadas)
              <div key={b.id} />
            )
          ))}
        </div>
      </div>

      {/* quadro central: sílabas selecionadas lado a lado */}
      <div className="bg-white text-black w-full max-w-2xl h-28 rounded-xl flex items-center justify-center text-3xl mb-4 px-4">
        <div className="flex items-center justify-center space-x-4">
          <AnimatePresence>
            {selecionadas.map((s, idx) => (
              <motion.div
                layoutId={s.id}
                key={s.id}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold"
              >
                {s.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* controles e info */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={checar}
          className="bg-green-500 px-6 py-2 rounded-lg text-lg shadow"
        >
          Checar
        </button>

        <button
          onClick={desfazer}
          className="bg-gray-300 text-black px-4 py-2 rounded-lg text-lg"
        >
          Desfazer
        </button>

        <button
          onClick={resetar}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-lg"
        >
          Resetar
        </button>
      </div>

      {/* feedback */}
      <div className="text-xl mb-8">{feedback}</div>

      {/* dica: mostrar targetCount */}
      <div className="text-sm text-white/80 bg-gray-700 rounded-lg">
        Selecione <b>{targetCount}</b> sílabas para formar a palavra.
      </div>
    </div>
  );
}