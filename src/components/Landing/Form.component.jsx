import React from 'react'
import Input from '../ui/Input.component'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Button from '../ui/Button.component'

const Form = () => {
    const [form,setForm] = React.useState({
        fname : {
            ElementConfig : {
                type : 'text',
                placeholder  : 'Rahul',
            },
            value : '',
            validity : {
                filled : false,
            }
        },
        lname : {
            ElementConfig : {
                type : 'text',
                placeholder  : 'Ved',
            },
            value : '',
            validity : {
                filled : false,
            }
        },
        email : {
            ElementConfig : {
                type : 'email',
                placeholder  : 'rahulved@email.com',
            },
            value : '',
            validity : {
                filled : false,
                shouldHave : '@'
            }
        },
        password : {
            ElementConfig : {
                type : 'password',
                placeholder  : 'Password',
            },
            value : '',
            validity : {
                filled : false,
                minLength : 6,
                maxLength : 12
            }
        },
        confPass : {
            ElementConfig : {
                type : 'password',
                placeholder  : 'Confirm password',
            },
            value : '',
            validity : {
                filled : false,
                minLength : 6,
                maxLength : 8
            }
        },
        phone : {
            ElementConfig : {
                type : 'number',
                placeholder  : 'Phone No.',
            },
            value : '',
            validity : {
                filled : false,
                minLength : 8,
                maxLength : 15
            }
        }
    })
    let FormInput = [];
    for(let i in form){
        FormInput.push({
            key : i,
            Data : form[i]
        })
    }
    const InputChangeHandler = (eve,id) => {
        const updateForm = { ...form };
        const updateFormEle = { ...updateForm[id] }
        updateFormEle.value = eve.target.value;
        updateForm[id] = updateFormEle;
        setForm(updateForm);
    }
    const submitHandler = eve => {
        eve.preventDefault();
        console.log("=========== USER DATA ===========")
        for(let i in form){
            console.log(form[i].value)
        }
        console.log("=========== USER DATA ===========")
    }
    return ReactDOM.createPortal(
        <JoinForm onSubmit={submitHandler}>
            {
                FormInput.map(({key,Data}) => {
                    return <Input
                    key={key}
                    onChange={(eve) => { InputChangeHandler(eve,key) }} 
                    {...Data}
                    />
                })
            }
            <Button 
            end={"true"}
            btnBg="var(--secondaryMain)" 
            type="submit"
            children="Register"
            />
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