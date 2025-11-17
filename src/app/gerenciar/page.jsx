"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Gerenciar() {
  // Estados Escola
  const [nomeEscola, setNomeEscola] = useState("");
  const [idParaEscola, setIdParaEscola] = useState("");

  // Estados Professor
  const [nomeProfessor, setNomeProfessor] = useState("");
  const [idEscolaProfessor, setIdEscolaProfessor] = useState("");
  const [idClasseProfessor, setIdClasseProfessor] = useState("");

  // Estados Classe
  const [nomeClasse, setNomeClasse] = useState("");
  const [idEscolaClasse, setIdEscolaClasse] = useState("");
  const [idProfessorClasse, setIdProfessorClasse] = useState("");

  // Estados Aluno
  const [nomeAluno, setNomeAluno] = useState("");
  const [idAluno, setAluno] = useState("");

  // SALVAR ESCOLA -------------------------
  async function salvarEscola() {
    const { error } = await supabase.from("Escola").insert([
      {
        nome_escola: nomeEscola,
        id_classe: Number(idClasseParaEscola),
      },
    ]);

    if (error) return alert("Erro: " + error.message);

    alert("Escola cadastrada!");
    setNomeEscola("");
    setIdParaEscola("");
  }

  // SALVAR PROFESSOR ----------------------
  async function salvarProfessor() {
    const { error } = await supabase.from("Professor").insert([
      {
        nome: nomeProfessor,
        id_escola: Number(idEscolaProfessor),
        id_classe: Number(idClasseProfessor),
      },
    ]);

    if (error) return alert("Erro: " + error.message);

    alert("Professor cadastrado!");
    setNomeProfessor("");
    setIdEscolaProfessor("");
    setIdClasseProfessor("");
  }

  // SALVAR CLASSE -------------------------
  async function salvarClasse() {
    const { error } = await supabase.from("Classe").insert([
      {
        nome_classe: nomeClasse,
        id_escola: Number(idEscolaClasse),
        id_professor: Number(idProfessorClasse),
      },
    ]);

    if (error) return alert("Erro: " + error.message);

    alert("Classe cadastrada!");
    setNomeClasse("");
    setIdEscolaClasse("");
    setIdProfessorClasse("");
  }

  // SALVAR ALUNO --------------------------
  async function salvarAluno() {
    const { error } = await supabase.from("Alunos").insert([
      {
        id_escola: Number(idEscolaAluno),
        id_classe: Number(idClasseAluno),
      },
    ]);

    if (error) return alert("Erro: " + error.message);

    alert("Aluno cadastrado!");
    setIdEscolaAluno("");
    setIdClasseAluno("");
  }

  return (
     <div className = "flex items-center justify-center h-screen bg-[url('/img/background.png')] bg-cover">
        <div className=" p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Gerenciar Sistema</h1>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

             {/* ESCOLA */}
            <div className="bg-white shadow p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Cadastrar Escola</h2>

                <input
                 type="text"
                 className="border text-black rounded w-95 mb-17"
                 placeholder="Nome da Escola"
                 value={nomeEscola}
                 onChange={(e) => setNomeEscola(e.target.value)}
                 />

                <input
                 type="number"
                 className="border text-black rounded w-full mb-3"
                 placeholder="ID da Escola"
                 value={idParaEscola}
                 onChange={(e) => setIdParaEscola(e.target.value)}
                />

                <button
                onClick={salvarEscola}
                className="bg-blue-600 text-white w-full p-2 rounded"
                >
                 Salvar Escola
                </button>
              
            </div>

        {/* PROFESSOR */}
        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Cadastrar Professor</h2>

          <input
            type="text"
            className="border text-black rounded w-full mb-27"
            placeholder="Nome do Professor"
            value={nomeProfessor}
            onChange={(e) => setNomeProfessor(e.target.value)}
          />

          <button
            onClick={salvarProfessor}
            className="bg-blue-600 text-white w-full p-2 rounded"
          >
            Salvar Professor
          </button>
        </div>

        {/* CLASSE */}
        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Cadastrar Classe</h2>

          <input
            type="text"
            className="border text-black rounded w-full mb-27"
            placeholder="Nome da Classe"
            value={nomeClasse}
            onChange={(e) => setNomeClasse(e.target.value)}
          />

          <button
            onClick={salvarClasse}
            className="bg-blue-600 text-white w-full p-2 rounded"
          >
            Salvar Classe
          </button>
        </div>

        {/* ALUNO */}
        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Cadastrar Aluno</h2>

          <input
            type="number"
            className="border text-black rounded w-full mb-17"
            placeholder="ID da Escola"
            value={nomeAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
          />

          <input
            type="number"
            className="border text-black rounded w-full mb-3"
            placeholder="ID da Classe"
            value={idAluno}
            onChange={(e) => setAluno(e.target.value)}
          />

          <button
            onClick={salvarAluno}
            className="bg-blue-600 text-white w-full p-2 rounded"
          >
            Salvar Aluno
          </button>
        </div>

      </div>
     </div>
    </div>
  );
}
