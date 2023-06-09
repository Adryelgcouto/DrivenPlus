import { Link } from "react-router-dom";
import Logo from '../../assets/logo-home.png'
import { ContentLogin } from "./login.styled";
export function Login(){
  return (
    <>
    <ContentLogin>
      <div>
      <img src={Logo} alt="" />
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Senha" />
      <button>ENTRAR</button>
      <Link to="/sign-up"><a>Não possuí uma conta? Cadastre-se</a></Link>
      </div>
      
    </ContentLogin>
    </>

  )
}