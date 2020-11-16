import React from 'react'
import styled from 'styled-components'
import Button from './Button.component'

const Input = ({inpType,config,...props}) => {
    const types = [
        'Dance workouts',
        'Weight training',
        'Calisthenics'
    ]
    let inpEle = null;
    switch(inpType){
        case 'dropdown' :
            inpEle =(<><button {...props}>Heelo</button>
            <WorkoutTypes>{types.map(type =><a href="#" key={type}>{type}</a> )}</WorkoutTypes>
            </>)
            break;
        case 'submitBtn' : 
            inpEle = <Button 
            end
            btnBg="var(--secondaryMain)" 
            type="submit">Submit</Button> ;
            break;
        case 'textarea' : 
            inpEle = <textarea {...props} />
            break;
        default :
            inpEle = <TextField {...props} />
    }
    return  <>{inpEle}</>
}

export default Input

const WorkoutTypes = styled.div`
display: flex;
flex-direction: column;
font-weight: 500;
background-color : var(--primaryBase);
transition : 0.3s all;
a{
    text-decoration: none;
    color : var(--base);
    padding: 0.5rem;
    &:hover{
        background-color : var(--primaryMain)
    }
}
`
const TextField = styled.input`
padding: 1rem 0.5rem;
outline : none;
border : none;
background-color : var(--primaryBase);
font-family : var(--font);
font-size : var(--content);
transition : 0.3s all;
box-shadow : 3px 3px 0px var(--imgGd);
border-bottom : 3px solid transparent;
&[type="password"]{
    letter-spacing : 5px;
}
::placeholder{
    letter-spacing : normal;
}
&:focus{
   background-color : var(--focus);
   border-bottom : 3px solid var(--secondaryBase);
}
`