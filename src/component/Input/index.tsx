import React, { HTMLProps } from 'react';

import { Container } from './styles';

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type,
}) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input
        name={label}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Container>
  );
};

export default Input;