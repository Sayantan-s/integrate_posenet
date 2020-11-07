import React from 'react'
import styled from 'styled-components'

const Button = ({children,btnCol,btnBg,p,...otherProps}) => {
    return <Btn
    btnCol={btnCol}
    btnBg={btnBg}
    {...otherProps}
    >{children}</Btn>
}

export default Button


const Btn = styled.button`
padding : ${props => props.p ? props.p : '0.8rem 1.5rem'};
margin : 0;
border : none;
outline  : none;
background-color : ${props => props.btnBg || 'var(--secondaryMain)'};
font-family: 'Futura TS';
color : ${props => props.btnCol || 'var(--primaryBase)'};
font-size : var(--button);
cursor : pointer;
font-weight: 500;
margin : 0.5rem 0 0 0;
transition : 0.2s all;
&:hover{
    transform : scale(1.015)
}
`