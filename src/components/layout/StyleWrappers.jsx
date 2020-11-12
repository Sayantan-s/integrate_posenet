import styled from 'styled-components'

export const Grid = styled.section`
display : grid;
grid-template-columns : ${props => props.col ? props.col : props.col2 ? 'minmax(5rem,1fr) repeat(12,minmax(max-content,8rem)) minmax(5rem,1fr)' :'minmax(4rem,1fr) repeat(10,minmax(max-content,8rem)) minmax(4rem,1fr)'};
grid-template-rows: ${props => props.row ? props.row : '100vh 10vh repeat(3,min-content)'};
grid-gap: ${props => props.gap || '0rem'};
grid-column : ${props => props.colCount || 'none'};
grid-row : ${props => props.rowCount || 'none'};
grid-gap : ${props => props.gap || '0rem'};
`