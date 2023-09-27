/* eslint-disable react/prop-types */
import { faker } from '@faker-js/faker';

import { useState } from 'react';
import SingleProduct from './SingleProduct';
import "./styles.css"

faker.seed(100)
const Home = () => {

    // console.log(useContext(Cart));
    const productArray = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
    }));

    console.log(productArray);


    const [products] = useState(productArray)
    return (
        <div className='productContainer'>
            {products.map((item) => (
                <SingleProduct item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Home;






