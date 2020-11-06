import styled from 'styled-components'

export const Grid = styled.section`
display : grid;
grid-template-columns : ${props => props.col ? props.col : 'minmax(4rem,1fr) repeat(10,minmax(max-content,9rem)) minmax(4rem,1fr)'};
grid-template-rows: ${props => props.row ? props.row : '100vh 40vw repeat(3,min-content)'}
`