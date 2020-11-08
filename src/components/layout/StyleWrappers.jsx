import styled from 'styled-components'

export const Grid = styled.section`
display : grid;
grid-template-columns : ${props => props.col ? props.col : props.col2 ? props.col2 :'minmax(4rem,1fr) repeat(10,minmax(max-content,8rem)) minmax(4rem,1fr)'};
grid-template-rows: ${props => props.row ? props.row : '100vh repeat(3,min-content)'};
overflow: hidden;
`