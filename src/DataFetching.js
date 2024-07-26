import { useEffect, useState } from "react";
//import { useContext } from 'react';
import "./Card.css";
//import { globalContext } from "./App";
import Nine from "./Nine";
import Navigation from "./Navigation";
function DataFetching(){
    //const {cartList,setCartList} = useContext(globalContext)
    const [data, setData] = useState([]);
    //const [globalCount,setglobalCount] = useState(0);
    useEffect(()=>{
        const fetchMyData = async () => { //async: When you tell a function it’s async, you're saying, "This function might take some time, so get ready to wait."
                const res = await fetch('https://fakestoreapi.com/products');
                console.log(res);
                console.log(res.ok);
                const resData = await res.json(); //await: This is like a special pause button. When you use await, you're saying, "Okay, I’m going to wait here until this task is done."
                setData(resData);
                console.log(resData)
                setData(resData);
                
        } 
        fetchMyData();
    },[])
    // const addToCart = (newObject) => {
    //     if(globalCount > 0){
    //     setCartList([...cartList,newObject])
    //     }
    // }
    return (
        <div>
            <Navigation/>
        <div className="card-container">
                {data.map((dataItem,index)=> (
                <div className="card" key={index}>
                    <div className='image-container'>
                        <img className="card-img-top" src={dataItem.image} alt='Foldsack'/>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{dataItem.title}</h5>
                      <div class="stars">
                        ★★★★☆
                      </div>
                      <p className="card-text">({dataItem.rating?.count} reviews)</p>
                      <p className='card-text'>₹{dataItem.price}</p>
                    </div>
                    <Nine/>
                </div>
                ))}
        </div>
        </div>
    );
}
export default DataFetching;