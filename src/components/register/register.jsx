import { Link } from "react-router-dom";
import { ContentRegister } from "./register.styled";
export function Register() {
  return (
      <ContentRegister>
        <div>
        <input type="email" placeholder="Nome" />
        <input type="text" placeholder="CPF"/>
        <input type="text" placeholder="E-mail"/>
        <input type="text" placeholder="Senha"/>
        <button>CADASTRAR</button>
        <Link to="/"><a href="">Já possuí uma conta? Entre</a></Link>
        </div>
       
      </ContentRegister>
  );
}
