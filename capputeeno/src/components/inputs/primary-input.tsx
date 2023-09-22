import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../icons';

export const PrimaryInput = styled.input`
  width: 352px;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  font-family: inherit;

  color: var(--text-dark);
  background-color: var(--bg-secondary);
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    top: 50%;
    right: 16px;
    position: absolute;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} onChange={(event) => props.handleChange(event.target.value)} />
      <SearchIcon />
    </InputContainer>
  );
}
