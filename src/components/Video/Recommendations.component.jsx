import React from 'react'
import styled from 'styled-components'
const Recommendations = () => {
    return (
        <Texts>
            <span>Recomendations</span>
        </Texts>
    )
}

export default Recommendations

const Texts = styled.div`
width:max-content;
color: white;
font-weight: 800;
font-size: 2rem;
display:flex;
position: fixed;
bottom: 0;
left: 0;
z-index: 10000;
margin: 0.5rem 1rem;
transform: skewX(-10deg);
background-color: var(--recomm);
padding: 0.5rem 2rem;
span{
    &::before{
    content : '';
    height: 100%;
    width: 20px;
    align-self:center;
    background-color: red;
    margin-right: 0.3rem;
}
}
`