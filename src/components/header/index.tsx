import Logo from "../logo/logo.svg";
import { FaSignOutAlt, FaSistrix, FaShoppingCart } from "react-icons/fa";
import * as S from "./style";

export const Header = () => {
  return (
    <S.Container>
      <img src={Logo} alt="Logo" />
      <div>
        <div>
          <input type="text" placeholder="Digitar Pesquisa" />
          <FaSistrix />
        </div>
        <FaShoppingCart />
        <FaSignOutAlt />
      </div>
    </S.Container>
  );
};
