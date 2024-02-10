import React from 'react';
import "./Prod.css"
const Prod = (props) => {
    return (
        <div className='projectBox'>
            <img src={props.img} />
        </div>
    );
};

export default Prod;
