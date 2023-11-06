import { useEffect, useState } from 'react';
import './Resturant.css';

function Resturant(props) {


    async function getData() {
        let backend_url = 'http://localhost:3200/data';
        let response = await fetch(backend_url);

        console.log(response);
        let responseData = await response.json();

        console.log(responseData);
    }


    return (
        <div>
            <h1>Resturant Component</h1>
        </div>
    )
}

export default Resturant;