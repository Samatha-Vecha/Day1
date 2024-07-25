import React, { useState, useEffect } from "react";
import './Sam.css';

function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const resData = await res.json();
            setData(resData);
        }
        fetchMyData();
    }, []);

    return (
        <div className="container">
            {data.map((dataItem, index) => (
                <div className="card" key={index}>
                    <img src={dataItem.image} alt={dataItem.title} />
                    <div className="card-body">
                        <h5 className="card-title">{dataItem.title}</h5>
                        <p className="card-text">{dataItem.description}</p>
                        <p className="card-price">${dataItem.price}</p>
                        <a href="#" className="card-btn">Go somewhere</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;