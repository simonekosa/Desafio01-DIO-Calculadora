import { ButtonContainer } from "./styles";

const Button = ({ label, onClick, color }) => {
  return (
    <ButtonContainer color={color} onClick={onClick}>
      {label}
    </ButtonContainer>
  );
};
export default Button;
