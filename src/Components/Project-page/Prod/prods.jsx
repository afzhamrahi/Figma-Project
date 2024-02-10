// import Datas from './productData';
import React from 'react';
import Prod from './Prod';
import Datas from './productData';
// import { useState } from 'react';
// console.log (Datas)
const prods = () => {

    // const {Product , setProduct} = useState(Datas)
    return (
        <div className='products'>
            {Datas.map(prduct=>(
                <Prod key={prduct.id} {...prduct}></Prod>
            ))}
        </div>
    );
};

export default prods;