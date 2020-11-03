import React from 'react'
import styled from 'styled-components'
const CalorieCount = () => {
    const [calorie,setCalorie] = React.useState(0);

    React.useEffect(() => {
       setInterval(() => {
            setCalorie(prev => prev + 1) 
       },Math.random()*20000)
    },[calorie])
    return (
        <BurnCal>
            <span>calories log</span>
            <span>{calorie < 100 ? `00${calorie}` : calorie}</span>
            <span>of 1500cal</span>
        </BurnCal>
    )
}

export default CalorieCount

const BurnCal = styled.div`
display :flex;
color : var(--mainBold);
flex-direction : column;
position : fixed;
top: 0;
right : 0;
width: 150px;
z-index: 100000;
background-color : white;
padding : 0.8rem 2rem;
border-radius: 1.2rem;
margin : 0.5rem;
box-shadow: 0 5px 20px rgba(255,255,255,0.5);
align-items :center;
span{
    &:first-child{
        text-transform: capitalize;
        color: var(--colGray);
        display:flex;
        flex-direction:column;
        &::after{
            content : '';
            height: 2px;
            width: 50%;
            align-self:center;
            background-color: red;
    }
    }
    &:nth-child(2){
        font-weight: 800;
        font-style : italic;
        font-size: 3rem;
    }
}
`