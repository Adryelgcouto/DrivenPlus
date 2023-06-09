import Prata from "../assets/logo-plano-branco.png";
import { ContentSubscriptions, InputValidate } from "./subscriptions.styled";
import Seta from "../assets/rota-subscriptions-fa-solid_arrow-left.svg";
import check from "../assets/rota-subscriptions-Vector.svg";
import dolar from '../assets/rota-subscriptions-fa-solid_money-bill-wave.svg'
export function Subscriptions() {
  return (
    <ContentSubscriptions>
      <header>
        <img src={Seta} alt="" />
      </header>
      <main>
        <div>
          <img src={Prata} alt="" />
          <h3>Driven Plus</h3>
        </div>
        <div>
          <div>
            <img src={check} alt="" />
            <span>Benefícios:</span>
          </div>
          <p>1. Brindes exclusivos</p>
          <p>2. Materiais bônus de web </p>
          <div>
            <img src={dolar} alt="" />
            <span>Preco:</span>
          </div>
          <p>R$ 39,99 cobrados mensalmente</p>
        </div>
        <InputValidate>
        <input type="text" placeholder="Nome impresso no cartão" />
        <input type="text" placeholder="Digitos do cartão" />
        <div>
          <input type="text" placeholder="Código de segurança" />
          <input type="text" placeholder="validade" />
        </div>
        <button>ASSINAR</button>
        </InputValidate>
        
      </main>
    </ContentSubscriptions>
  );
}
