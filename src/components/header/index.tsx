import Logo from "../logo/logo.svg";
import { FaSignOutAlt, FaSistrix, FaShoppingCart } from "react-icons/fa";
import * as S from "./style";

export const Header = () => {
  return (
    <S.Container>
      <img src={Logo} alt="Logo" />
      <div>
        <S.Input>
          <input type="text" placeholder="Digitar Pesquisa" />
          <S.Search>
            <FaSistrix />
          </S.Search>
        </S.Input>
        <S.Icons>
          <FaShoppingCart />
          <FaSignOutAlt />
        </S.Icons>
      </div>
    </S.Container>
  );
};
