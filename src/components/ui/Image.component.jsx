import React from 'react'

const Image = ({src,alt,mainClass,adderClass,...moreProps}) => {
    return (
        <div className={`${mainClass ? mainClass : ""}img--container ${adderClass ? adderClass: ""}`}>
             <img 
                {...moreProps}
                src={src} 
                alt={alt} />
        </div>
    )
}

export default Image
