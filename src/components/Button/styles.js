import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 70px;
  height: 62px;
  border: 1px solid#ffffff;
  border-color: transparent;
  background-color: ${({ color }) => color || "rgb(52, 54, 54)"};
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  flex: 1;
  cursor: pointer;
  &:hover {
    background-color: rgb(245, 141, 5);
  }
  &:disabled {
    background-color: #999;
    cursor: default;
  }
  border.circle {
    border-radius: 60%;
  }
  border-radius: 40px;
`;
