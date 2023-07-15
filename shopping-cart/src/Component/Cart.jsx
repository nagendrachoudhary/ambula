import React, { useContext, useState } from 'react';
import Context from './Context';
import CartCard from './CartCard';

export default function Cart() {
    // State to track the loading status
    const [Loading, setLoading] = useState(true);

    // Accessing the cart and setCart functions from the Context
    let { cart, setcart } = useContext(Context);

    // Fetching data from the cart
    let data = cart();

    // Calculating the total price of items in the cart
    let total = 0;
    data.map((el) => {
        total = total + el.price;
    });

    // Simulating a loading delay of 1 second
    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (
        <div style={{ marginTop: '60px' }}>
            {Loading ? (
                // Show loading message if data is still loading
                <h1>Loading....</h1>
            ) : (
                <>
                    {/* Display total number of items and total price */}
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            backgroundColor: 'black',
                            color: 'white',
                        }}
                    >
                        <h3>No of Items: {data.length}</h3>
                        <h3>Total: {total}</h3>
                    </div>

                    {/* Render each cart item using CartCard component */}
                    {data.map((el, i) => {
                        return <CartCard data={el} />;
                    })}
                </>
            )}
        </div>
    );
}
