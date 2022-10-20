import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: gray;
    color: #fff;
  }
`;

export default Button;
