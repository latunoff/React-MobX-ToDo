import styled from 'styled-components'


const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default Header

export const Input = styled.input``

export const Button = styled.button`
  cursor: pointer
`

export const Caption = styled.span`
  color: ${props => props.done ? 'grey' : 'white'}
`