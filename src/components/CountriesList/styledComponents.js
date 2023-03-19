import styled from 'styled-components'

export const VisitButton = styled.button`
  background-color: ${props => (props.isVisited ? '#3b82f6' : '#334155')};
  color: #ffffff;
  font-size: 16px;
  padding: 1%;
  border-radius: 5px;
  border: 0px;
`
