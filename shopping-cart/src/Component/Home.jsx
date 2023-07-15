import React, { useEffect, useState } from 'react';
import DataCard from './DataCard';

function Home(props) {
    // State to store the fetched data
    const [data, setdata] = useState([]);

    // State to track the loading status
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetching data from the API
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                res.json().then((data) => {
                    // Updating the state with the fetched data
                    setdata([...data]);
                    setLoading(false);
                });
            });
    }, []);

    return (
        <div className='Card'>
            {Loading ? (
                <h1>Loading.....</h1>
            ) : (
                // Rendering DataCard component for each item in the data array
                data.map((el, i) => {
                    return <DataCard data={el} />;
                })
            )}
        </div>
    );
}

export default Home;
