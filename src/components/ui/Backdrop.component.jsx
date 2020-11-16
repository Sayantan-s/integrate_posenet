import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom' 

const Backdrop = () => ReactDOM.createPortal(<BackdropBase />,document.getElementById('modals'))

export default Backdrop
const BackdropBase = styled.div`
width: 100vw;
height: 100vh;
z-index: 10000000;
background-color: var(--backdrop);
position:fixed;
top: 0;
` 