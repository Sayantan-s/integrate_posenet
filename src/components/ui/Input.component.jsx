import React from 'react'
import styled from 'styled-components'
import Button from './Button.component'
import { ArrowDropDown } from './ui'

const Input = ({inpType,config,...props}) => {
    const types = [
        'Dance workouts',
        'Weight training',
        'Calisthenics'
    ]
    let inpEle = null;
    switch(inpType){
        case 'dropdown' :
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

const Dropdown = styled.div`
.Dropdown{
    position: relative;
    &-types{
        flex-direction: column;
        font-weight: 500;
        background-color : var(--primaryBase);
        transition : 0.3s all;
        display: flex;
        a{
            text-decoration: none;
            color : var(--base);
            padding: 0.5rem;
            &:hover{
                background-color : var(--primaryMain)
            }
        }
    }
    &-btn{
        gap : 3rem;
        span{
            &:last-child{
                width: 1.5rem;
                height: 1.5rem;
            }
        }
        &:hover &-types{
           
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
::placeholder{
    letter-spacing : normal;
}
&:focus{
   background-color : var(--focus);
   border-bottom : 3px solid var(--secondaryBase);
}
`