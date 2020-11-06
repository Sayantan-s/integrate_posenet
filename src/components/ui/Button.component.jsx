import React from 'react'
import styled from 'styled-components'

const Button = ({className,children,handleClick,...otherProps}) => {
    return <Btn 
    className={className}
    onClick={handleClick}
    {...otherProps}
    >{children}</Btn>
}

export default Button


const Btn = styled.button`
padding : ${props => props.p ? props.p : '0.8rem 1.5rem'};
margin : 0;
border : none;
outline  : none;
background-color : ${props => props.bgCol ? props.bgCol : 'var(--secondaryMain)'};
font-family: 'Futura TS';
color : #fff;
font-size : var(--button);
cursor : pointer;
`