import { FC } from "react";

import styled from "styled-components";
import Button from "../components/Button";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  color: #fff;
  height: 200px;
  gap: 15px;
`;

const HeaderTitle = styled.h1`
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 2px;

  margin: 0;
`;

const HeaderSubtitle = styled.h2`
  font-size: 17px;
  font-weight: 500;
  margin: 0;
  letter-spacing: 2px;
`;

const Home: FC = () => {
  return <div>
    <Header>
      <HeaderTitle>COMPRA Y VENDE</HeaderTitle>
      <HeaderSubtitle>¡Dale una nueva oportunidad a las cosas que ya no usas!</HeaderSubtitle>
      <Button>COMPRAR AHORA!</Button>
    </Header>
  </div>;
}

export default Home;