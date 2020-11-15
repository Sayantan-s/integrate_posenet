import React from 'react'
import styled from 'styled-components'

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
        case 'textarea' : 
            inpEle = <textarea {...props} />
            break;
        default :
            inpEle = <input {...props} />
    }
    return  <>{inpEle}</>
}

export default Input

const WorkoutTypes = styled.div`
display: flex;
flex-direction: column;
font-weight: 500;
background-color : var(--primaryBase);
a{
    text-decoration: none;
    color : var(--base);
    padding: 0.5rem;
    &:hover{
        background-color : var(--primaryMain)
    }
}
`