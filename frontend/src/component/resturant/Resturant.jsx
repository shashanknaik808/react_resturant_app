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
            flag: true,
            foodData: responseData[0],
            drinkData: responseData[1]
        };
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className='pri'>
            <div>
                {menuData.flag ? <h1>{menuData.foodData[0].foodName}</h1> : <h1>Loading</h1>}
                {menuData.flag ? <h1>{menuData.drinkData[0].drinkName}</h1> : <h1>Loading</h1>}
            </div>
        </div>
    )
}

export default Resturant;