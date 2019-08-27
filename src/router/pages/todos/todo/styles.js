import styled from 'styled-components'


const StyledTodo = styled.li`
  color: ${props => props.done ? 'grey' : 'white'}
`

export default StyledTodo

export const Input = styled.input``

export const Button = styled.button`
  cursor: pointer;
  color: ${props => props.delete ? 'red' : 'black'}
`
