import React from 'react'
import styled from 'styled-components'
const Timer = ({time}) => {
    const [mins,setMins] = React.useState(0);
    const [secs,setsecs] = React.useState(0);
    React.useEffect(() => {
        const timer = _ => {
            let minutes = Math.floor(time/100);
            let seconds = Math.floor(time%60);
            seconds = seconds < 10 ? `0${seconds}` : seconds
            time--;
            setMins(minutes)
            setsecs(seconds)
        }
      time > 0 ?  setInterval(() => {timer()},1000) : clearInterval(timer())
    },[time])
    return (
        <CountDown >
            <span>Timer</span>
            <span>{mins} : {secs}</span>
        </CountDown >
    )
}

export default Timer

const CountDown = styled.div`
position :fixed;
top : 0;
left: 0;
z-index: 10000000;
background-color: rgba(255,255,255,0.9);
color : var(--mainBold);
width : 130px;
padding : 0.5rem 2rem;
border-radius: 1.2rem;
margin : 0.5rem;
box-shadow: 0 5px 20px rgba(255,255,255,0.5);
display : flex;
place-content: center ;
flex-direction: column;
span{
    &:first-child{
        font-weight : 400;
        color : var(--colGray);
        font-size: 1rem;
        padding: 0;
        margin: 0;
        margin-bottom: 1rem;
        display: flex;
        flex-direction:column; 
        &::after{
            content : '';
            height: 2px;
            width: 50%;
            background-color: red;
            margin: 0;
            padding: 0 ;
        }
    }
    &:nth-child(2){
        font-size : 3rem;
        font-weight: 800;
        padding: 0;
        margin: 0;
        font-style: italic;
        line-height: 1;
    }
}
`