import { useEffect, useState } from 'react';
import './Resturant.css';

function Resturant(props) {

    const [menuData, setMenuData] = useState({
        flag: false,
        foodData: null,
        drinkData: null
    });

    async function getData() {
        let backend_url = 'http://localhost:3200/data';
        let response = await fetch(backend_url);

        let responseData = await response.json();

        setMenuData = {
            flag: false,
            foodData: responseData[0],
            drinkData: responseData[1]
        };
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Resturant Component</h1>
        </div>
    )
}

export default Resturant;