import React, { useEffect, useState } from 'react';

// Creating a Context object
const Context = React.createContext({
    cart: () => {},
    setcart: (data) => {},
});

// CartContextProvider component
export function CartContextProvider({ children }) {
    // State to store the cart data
    const [cart, setcart] = useState([]);

    // Function to retrieve cart data
    function show() {
        return cart;
    }

    // Function to update cart data
    function add(data) {
        setcart(data);
    }

    // Rendering the context provider and passing down the values
    return (
        <Context.Provider
            value={{
                cart: show,
                setcart: add,
            }}
        >
            {children}
        </Context.Provider>
    );
}

// Exporting the Context
export default Context;
