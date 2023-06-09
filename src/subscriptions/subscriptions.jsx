import Prata from "../assets/logo-plano-branco.png";
import { ContentSubscriptions } from "./subscriptions.styled";
import Seta from '../assets/rota-subscriptions-fa-solid_arrow-left.svg'
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
          <div>
            
          </div>
        </div>
      </main>
    </ContentSubscriptions>
  
  );
}
