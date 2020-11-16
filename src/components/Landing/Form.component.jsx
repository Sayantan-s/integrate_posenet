import React from 'react'
import Input from '../ui/Input.component'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Form = () => {
    const [form,setForm] = React.useState({
        fname : '',
        lname : '',
        email : '',
        password : '',
        confpass : '',
        phone : ''
    });
    const { fname,lname,email,password,confpass,phone } = form
    return ReactDOM.createPortal(
        <JoinForm>
            <Input 
            type="text"
            placeholder="First name"
            value={fname}
            onChange={(eve) =>{setForm(eve.target.value)} } 
            />
             <Input 
            type="text"
            placeholder="Last name"
            value={lname}
            onChange={(eve) =>{setForm(eve.target.value)} } 
            />
             <Input 
            type="text"
            placeholder="rahulved@email.com"
            value={email}
            onChange={(eve) =>{setForm(eve.target.value)} } 
            />
            <Input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(eve) =>{setForm(eve.target.value)}}
            />
            <Input 
            type="password"
            placeholder="Confirm password"
            value={password}
            onChange={(eve) =>{setForm(eve.target.value)}}
            />
            <Input 
            type="number"
            placeholder="Phone No."
            value={confpass}
            onChange={(eve) =>{setForm(eve.target.value)}}
            />
            <Input inpType="dropdown" />
            <Input inpType="submitBtn"/>
        </JoinForm>,
        document.getElementById('modals')
    )
}

export default Form

const JoinForm = styled.form`
position : fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
z-index: 10000000;
display: flex;
flex-direction: column;
gap : 0.5rem;
width: 400px;
padding : 2rem;
background-color : var(--primaryBase); 
`