import React from 'react'
import styled from 'styled-components'
import Button from '../ui/Button.component'
import video from "../../assets/thirdVideo.mp4";

const EndingSection = () => {
    return (
       <>
        <EndContentSection>
            <h1>Featured</h1>
            <h2>
                Get Ready!
            </h2>
            <p>Dance is a health-promoting physical activity which many people worldwide incorporate into their lifestyles today. This physical activity appeals to some who may not typically be active and therefore may be another alternative of exercise. Dance for health has become an important factor in the prevention, treatment and management in several health circumstances.</p>
            <Button btnBg={'var(--secondaryBase)'}>Let's Rumble</Button>
        </EndContentSection>
        <EndVideoSection>
            <div className="video-wrapper">
                <video
                autoPlay 
                muted 
                loop>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </EndVideoSection>
       </>
    )
}

export default EndingSection

const EndContentSection = styled.div`
display: flex;
flex-direction: column;
grid-column : 2/8;
grid-row : 2/-1;
justify-content: center;
align-items: center;
align-self: center;
text-align: center;
h1{
    font-weight: 400;
    color: var(--secondaryBase);
    margin-bottom: 1rem;
    font-size: 1rem;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
    grid-gap : 0.4rem;
    &::before, &::after{
        content: '';
        height: 1px;
        width: 20px;
        background-color : currentColor;
    }
}
h2{
    font-size: var(--subhead);
    margin : 0;
    font-weight: 500;
    color: var(--base);
}
p{
    max-width : 720px;
    min-width : 400px;
    margin-bottom: 1.5rem;
}
`
const EndVideoSection = styled.div`
display : flex;
place-content:center;
grid-row : 2/-1;
grid-column :8/-2;
.video-wrapper {
    position : relative;
    overflow: hidden;
    video{
        max-width : 700px;
        transform : scale(1.03)
    }
    &::after{
        content : '';
        position : absolute;
        background: black;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--imgGd);
                          
    }
}
`
