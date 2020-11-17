import React from 'react'
import styled from 'styled-components'
import Button from './Button.component'
//import { ArrowDropDown } from './ui'

const Input = ({inpType,config,ElementConfig,onChange,...props}) => {
    const types = [
        'Dance workouts',
        'Weight training',
        'Calisthenics'
    ]
    let inpEle = null;
    switch(inpType){
        /*case 'dropdown' :
            inpEle =(
            <Dropdown className={'Dropdown'}>
                <Button 
                {...props} 
                className="Dropdown-btn"
                btnCol="var(--primaryBase)" 
                btnBg={'var(--secondaryMain)'} 
                fontSize="var(--content)" 
                p="0.5rem">
                    <span>Choose dance</span>
                    <span><ArrowDropDown size={'1.5rem'}/></span>
                </Button>
                <div className="Dropdown-types">{types.map(type =><a href="#" key={type}>{type}</a> )}</div>
            </Dropdown>
            )
            break;*/
        case 'textarea' : 
            inpEle = <textarea 
            {...ElementConfig}  
            {...props}
            onChange={onChange}
            />
            break;
        default :
            inpEle = <TextField 
            {...ElementConfig} 
            {...props}
            onChange={onChange}
            />
    }
    return  <>{inpEle}</>
}

export default Input

const Dropdown = styled.div`
    .Dropdown-types{
        flex-direction: column;
        font-weight: 500;
        background-color : var(--primaryBase);
        transition : 0.3s all;
        display: flex;
        justify-items :start;
        a{
            text-decoration: none;
            color : var(--base);
            padding: 0.5rem;
            &:hover{
                background-color : var(--primaryMain)
            }
        }
    }
    .Dropdown-btn{
        gap : 3rem;
        span{
            &:last-child{
                width: 1.5rem;
                height: 1.5rem;
            }
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
border-bottom : 3px solid var(--imgGd);
&[type="password"]{
    letter-spacing : 5px;
}
&[type="number"]{
    -moz-appearance: textfield;
}
::placeholder{
    letter-spacing : normal;
}
&:focus{
   background-color : var(--focus);
   border-bottom : 3px solid var(--secondaryBase);
}
`