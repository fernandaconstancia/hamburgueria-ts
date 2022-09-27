import { Link } from "react-router-dom";
import Logo from "../../components/logo/logo.svg";
import Bag from "../../components/logo/bag.svg";
import Bolinhas from "../../components/logo/bolinhas.svg";
import * as S from "./style";

export const LoginPage = () => {
  return (
    <S.Container>
      <S.BoxLogin>
        <h1>Login</h1>
        <S.Input>
          <label htmlFor="name">Nome</label>
          <input type="text" placeholder="Digite seu nome" />
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder="Digite sua senha" />
          <button type="submit">Logar</button>
        </S.Input>
        <S.Singup>
          <p>Crie sua conta para saborear muitas delicias e matar sua fome!</p>
          <Link to="/singnup">Cadastrar</Link>
        </S.Singup>
      </S.BoxLogin>
      <S.BoxLogo>
        <img src={Logo} alt="Logo" />
        <S.BoxText>
          <div className="imageBox">
            <img src={Bag} alt="Compras" />
          </div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong>melhores</strong> ingredientes
          </p>
        </S.BoxText>
        <img src={Bolinhas} alt="Bolinhas" />
      </S.BoxLogo>
    </S.Container>
  );
};
