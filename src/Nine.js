import {  useEffect, useState} from "react";
import { useContext } from "react";
import { globalContext } from "./App";
function Nine({ dataItem }){
    const {globalCount,setglobalCount,cartList,setCartList} = useContext(globalContext)
    const [count, setCount] = useState(0);
    //hooks
    useEffect(()=>{
        //setCount(0);
        console.log('use effect is called');
    },[count] );
    const buttonClickAdd = () => {
        setCount(count+1);
        setglobalCount(globalCount+1)
        addToCart({ ...dataItem, quantity: count + 1 });
    }
    const buttonClickSubtract = () => {
        if(count > 0){
            setCount(count-1);
            setglobalCount(globalCount-1);
            addToCart({ ...dataItem, quantity: count - 1 });
        }
    }
    const AddToCart = () => { 
        setCount(1);
        setglobalCount(globalCount+1);
        addToCart({ ...dataItem, quantity: 1 });
    }  
    const addToCart = (newObject) => {
        if(globalCount > 0){
        setCartList([...cartList,newObject])
        }
    }
    return(
        
        <div>
            {
            count === 0 ? 
                    (<button className="cart-button" onClick = {AddToCart}>Add to Cart</button>) : 
                    (<div style={{display:'flex' , height:'40px',margin:'15px'}}>
                        <button className="btn btn-dark" onClick={buttonClickAdd}>+</button>
                        <h1 style={{margin:'0px 15px'}}>{count}</h1>
                        <button className="btn btn-primary" onClick={buttonClickSubtract}>-</button>
                    </div>)
            }
        </div>
        
        
    )
}
export default Nine;