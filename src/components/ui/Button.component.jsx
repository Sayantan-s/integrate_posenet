import React from 'react'
import styled from 'styled-components'

const Button = ({children,btnCol,btnBg,p,...otherProps}) => {
    return <Btn
    btnCol={btnCol}
    btnBg={btnBg}
    p={p}
    {...otherProps}
    >{children}</Btn>
}

export default Button


const Btn = styled.button`
display:flex;
align-self :${props => props.start ? 'flex-start' : props.end ? 'flex-end' : 'none'};
justify-content:center;
padding : ${props => props.p ? props.p : '0.8rem 1.5rem'};
width: ${props => props.width || 'auto'};
height: ${props => props.height || 'auto'};
margin : 0;
border : none;
outline  : none;
background-color : ${props => props.btnBg || 'transparent'};
font-family: 'Futura TS';
color : ${props => props.btnCol || 'var(--primaryBase)'};
font-size : var(--button);
cursor : pointer;
font-weight: 500;
margin : 0.5rem 0 0 0;
transition : ${props => props.transition || '1s all'};
&:hover{
    background-color : ${props => props.hovBg || "none"};
}
`