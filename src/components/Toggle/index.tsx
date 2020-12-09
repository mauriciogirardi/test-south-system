import React from 'react';
import { FaRegLightbulb, FaMoon } from 'react-icons/fa';
import { Container, ToggleSelector } from './styles';

interface IToggleProps {
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({ checked, onChange }) => (
  <Container checked={checked}>
    <FaRegLightbulb size={20} className="lightbulb" />
    <ToggleSelector
      checked={checked}
      height={15}
      width={50}
      onChange={onChange}
      uncheckedIcon={false}
      checkedIcon={false}
    />
    <FaMoon size={20} className="moom" />
  </Container>
);

export default Toggle;
