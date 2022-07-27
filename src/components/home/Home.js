import React, { useState, useEffect } from "react";

function Home() {
    const [meal, setMeal] = useState([]);


    useEffect(() => {
    //Fetch the API 
    fetch('http://www.themealdb.com/api/json/v1/1/categories.php')
        .then((resp) => resp.json())
        .then((data) => console.log(data.meal));
    }, []);

    return(
        <div>
            <h1>food</h1>
            {meal}
        </div>
    )
}

export default Home;
