import Plus from '../../assets/logo-plano-branco.png'
import Gold from '../../assets/logo-plano-amarelo.png'
import Dimont from '../../assets/logo-plano-verde.png'
import { Plano } from './plano';
import { ContentPlanos } from './planos.styled';
export function Planos() {
  return (
    <ContentPlanos>
      <div>
      <h1>Escolha seu Plano</h1>
      <Plano plus={Plus}preco='39,99'/>
      <Plano plus={Gold}preco='69,99'/>
      <Plano plus={Dimont} preco='99,99'/>
      </div>
     
    </ContentPlanos>
  );
}
