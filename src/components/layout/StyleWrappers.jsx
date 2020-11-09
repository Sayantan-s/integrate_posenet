import styled from 'styled-components'

export const Grid = styled.section`
display : grid;
grid-template-columns : ${props => props.col ? props.col : props.col2 ? 'minmax(5rem,1fr) repeat(12,minmax(max-content,8rem)) minmax(5rem,1fr)' :'minmax(4rem,1fr) repeat(10,minmax(max-content,8rem)) minmax(4rem,1fr)'};
grid-template-rows: ${props => props.row ? props.row : 'repeat(2,100vh) repeat(3,min-content)'};
overflow: hidden;
`