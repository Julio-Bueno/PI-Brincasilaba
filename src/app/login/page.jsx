"use client";

import { useState} from "react";
import {supabase } from "../../lib/supabaseClient";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function resetForm(){
        setEmail("");
        setPassword("");
    }
    async function handleLogin(e){
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({ email, password});

        if(error){ 
            alert(error.message)
            resetForm()
            return;
        };
            
    }
    return(
        <div className = "flex items-center justify-center h-screen bg-[url('/img/background.png')] bg-cover">
            <div className = "flex flex-col items-center justify-center h-screen">
                <form className = "flex flex-col gap-4" onSubmit = {handleLogin}>
                    <input
                        type = "email"
                        placeholder = "Seu e-mail"
                        className = "border bg-white text-black rounded w-70"
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                   
                    <input
                        type = "password"
                        placeholder = "Senha"
                        className = "border bg-white text-black rounded"
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                   
                    <button className = "bg-blue-500 text-white p-2 rounded">
                        Login
                    </button>
                </form>
            </div>
        </div>

    );
}