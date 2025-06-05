"use client";
import { useState } from "react";
import todosOsUsuarios from "../data/constants/usuarios";
import ListaUsuarios from "./listaUsuarios";
import Usuario from "@/data/model/Usuario";
import FormUsuario from "./formUsuario";
import Id from "@/data/model/Id";

export default function CadastroUsuario() {
  const [usuarioAtual, setUsuarioAtual] = useState<Partial<Usuario> | null>(
    null
  );
  const [usuarios, setUsuarios] = useState<Usuario[]>(todosOsUsuarios);

  function removerUsuario(usuarioRemover: Usuario) {
    const usuariosAtualizados = usuarios.filter(
      (u) => u.id !== usuarioRemover.id
    );
    setUsuarios(usuariosAtualizados);
  }
  function selecionarUsuario(usuarioAtual: Partial<Usuario>) {
    setUsuarioAtual(usuarioAtual);
  }

  function salvarUsuario(){
    const usuarioExistente = usuarios.find(u => u.id === usuarioAtual?.id)
    if(usuarioExistente){
      const novosUsuarios = usuarios.map(u => {
        return u.id === usuarioAtual?.id ? usuarioAtual : u;
      })
      setUsuarios(novosUsuarios as Usuario[])
    } else {
      setUsuarios([...usuarios, usuarioAtual as Usuario])
    }
    setUsuarioAtual(null)
  }
  function cancel() {
    setUsuarioAtual(null);
  }

  return (
    <div>
      <header className="pt-8 pb-4">
        <h1 className="font-bold text-3xl text-gray-400 ">
          Cadastro de usuários:
        </h1>
        <span className="text-gray-500">
          Formulário e lista de usuários cadastrados
        </span>
      </header>
      <div className="flex flex-col gap-5">
        <button
          className="botao verde self-end"
          onClick={() => selecionarUsuario({id: Id.novo()})}
        >
          + Novo Usuário
        </button>
        {usuarioAtual ? (
          <FormUsuario 
            usuario={usuarioAtual} 
            alterarUsuario={setUsuarioAtual}
            salvar={salvarUsuario}
            cancel={cancel} 
          />
        ) : (
          <ListaUsuarios
            usuarios={usuarios}
            selecionarUsuario={selecionarUsuario}
            removerUsuario={removerUsuario}
          />
        )}
      </div>
    </div>
  );
}
