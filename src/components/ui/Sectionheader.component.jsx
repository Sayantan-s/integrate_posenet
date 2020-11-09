import React from 'react'
import styled from 'styled-components'

const Sectionheader = ({header,shorthead,...props}) => {
    return (
        <Header {...props}>
            <h1>{header}</h1>
            <p>{shorthead}</p>
        </Header>
    )
}

export default Sectionheader

const Header = styled.div`
grid-column : ${props => props.colCount || 'none'};
grid-row : ${props => props.rowCount || 'none'};
text-align: center;
margin-top : 2rem;
h1{
    font-size : var(--subhead);
    padding: 0;
    margin : 0;
    color : var(--base);
    font-weight: 600;
}
p{
    color: var(--secondaryBase);
    margin: 0;
}
`