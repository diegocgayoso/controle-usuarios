"use client";
import Usuario from "@/data/model/Usuario";

interface ListaUsuariosProps {
  usuarios: Usuario[]
  removerUsuario: (usuario: Usuario) => void
  selecionarUsuario: (usuario:Usuario) => void
}

export default function ListaUsuarios(props: ListaUsuariosProps) {
  function rederUsuario(usuario: Usuario) {
    return (
      <div className="flex items-center px-7 py-3 bg-zinc-900 rounded-md">
        <div className="flex flex-1 flex-col">
          <span className="flex-1 font-bold">{usuario.nome}</span>
          <span className="flex-1 text-gray-500 text-sm">{usuario.cargo}</span>
          <span className="flex-1 text-gray-500 text-sm">{usuario.email}</span>
        </div>
        <div className="flex gap-2">
          <button className="botao azul" onClick={() => props.selecionarUsuario(usuario)}>Alterar</button>
          <button className="botao vermelho" onClick={() => props.removerUsuario(usuario)}>Excluir</button>
        </div>
      </div>
    );
  }
  return (
    <ul className="flex flex-col gap-2">
      {props.usuarios.map((usuario) => {
        return <li key={usuario.id}>{rederUsuario(usuario)}</li>;
      })}
    </ul>
  );
}
