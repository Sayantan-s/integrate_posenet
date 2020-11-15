import React from 'react'
import Input from '../ui/Input.component'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Form = () => {
    return ReactDOM.createPortal(
        <JoinForm>
            <Input />
            <Input inpType="dropdown" />
        </JoinForm>,
        document.getElementById('modals')
    )
}

export default Form

const JoinForm = styled.form`
position : absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
z-index: 10000000;
`