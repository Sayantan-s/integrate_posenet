import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom' 
import { FORM_IS_CLOSED } from '../../store/actions/formact.actions'
import { connect } from 'react-redux'
const Backdrop = (props) => ReactDOM.createPortal(<BackdropBase onClick={props.closeForm}/>,document.getElementById('modals'))

const mapDispatchToProps = dispatch => {
    return {
        closeForm : _ => dispatch(FORM_IS_CLOSED())
    }
}

export default connect(null,mapDispatchToProps)(Backdrop)

const BackdropBase = styled.div`
width: 100vw;
height: 100vh;
z-index: 10000000;
background-color: var(--backdrop);
position:fixed;
top: 0;
` 