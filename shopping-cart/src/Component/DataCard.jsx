import React, { useContext } from 'react';
import Context from './Context';

export default function DataCard(props) {
    // Extracting data from props
    let data = props.data;

    // Accessing the cart and setCart functions from the Context
    let { cart, setcart } = useContext(Context);

    // Function to add data to the cart
    const AddData = (data) => {
        // Retrieving the current cart data
        const cartdata = cart();

        // Creating a new array with the existing cart data and the new data
        let arr = [...cartdata, data];

        // Updating the cart with the new array
        setcart([...arr]);
        console.log(arr);
    };

    return (
        <div>
            <img width={'200px'} height={'200px'} src={data.image} />
            <h5>{data.title}</h5>
            <h5>Price: ${data.price}</h5>
            <button onClick={() => { AddData(data) }}>Add to cart</button>
        </div>
    );
}
