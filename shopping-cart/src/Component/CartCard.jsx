import React, { useContext } from 'react';
import Context from './Context';

export default function CartCard({ data }) {
    // Accessing the cart and setCart functions from the Context
    let { cart, setcart } = useContext(Context);

    // Fetching data from the cart
    let cartdata = cart();

    // Function to remove an item from the cart
    const Remove = (id) => {
        // Filtering out the item with the specified id
        const arr = cartdata.filter((el, i) => {
            return el.id !== id;
        });

        // Updating the cart with the new array of items
        setcart([...arr]);
    };

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '25%' }}>
                <img width={'100px'} height={'100px'} src={data.image} />
            </div>
            <div style={{ width: '25%', overflow: 'hidden' }}>
                <h5>{data.title}</h5>
            </div>
            <div style={{ width: '25%', overflow: 'hidden' }}>
                <h5>Price: ${data.price}</h5>
            </div>
            <button onClick={() => { Remove(data.id) }}>Remove</button>
        </div>
    );
}
