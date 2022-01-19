import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
 display: grid;
 gap: 1rem;

 h2 {
   font-size: 1.5rem;
   font-weight: 500;
   color: var(--text-title)
 }

 input {
   font-size: 1rem;
   border: 1px solid #D7D7D7;
   border-radius: 0.25rem;
   padding: 1rem;
   color: #555;

   &::placeholder {
     color: #e7e9ee;
   }

   &:focus {
      border: 1px solid #d7d7d7;
      outline: 1px solid #d0d0d0;
   }
 }

 button[type='submit'] {
    font-size: 1rem;
    padding: 1rem;
    background: var(--green);
    border-radius: 0.25rem;
    color: #fff;
    font-weight: 400;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.05, '#33cc95')};
    }
 }
`

export const TypeButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

interface ButtonProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc95',
  red: '#e52e40'
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  height: 3.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;

  transition: background 0.2s;

  background: ${(props) => props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };

  border: 1px solid ${(props) => props.isActive
    ? transparentize(0.7, colors[props.activeColor])
    : '#d7d7d7'
  };

  img {
    width: 20px;
    height: 20px
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title)
  }
`
