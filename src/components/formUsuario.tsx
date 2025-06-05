import Usuario from "@/data/model/Usuario";

interface FormUsuarioProps {
  usuario: Partial<Usuario>;
  alterarUsuario: (usuario: Partial<Usuario>) => void;
  salvar: () => void;
  cancel: () => void;
}
export default function FormUsuario(props: FormUsuarioProps) {
    const {usuario, alterarUsuario, salvar, cancel} = props;
    return (
    <div className="pb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <span>Nome</span>
          <input
            className="input"
            value={usuario.nome ?? ""}
            type="text"
            onChange={e => alterarUsuario({...usuario, nome: e.target.value})}
          />
        </div>
        <div className="flex flex-col">
          <span>Cargo</span>
          <input
            className="input"
            value={usuario.cargo ?? ""}
            type="text"
            onChange={e => alterarUsuario({...usuario, cargo: e.target.value})}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <span>Email</span>
          <input
            className="input"
            value={usuario.email ?? ""}
            type="email"
            onChange={e => alterarUsuario({...usuario, email: e.target.value})}
          />
        </div>
        <div className="flex flex-col">
          <span>Senha</span>
          <input
            className="input"
            value={usuario.senha ?? ""}
            type="password"
            onChange={e => alterarUsuario({...usuario, senha: e.target.value})}
          />
        </div>
      </div>
      <div className="flex gap-2 py-2">
        <button className="botao azul" onClick={salvar}>
          Salvar
        </button>
        <button className="botao cinza" onClick={cancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
