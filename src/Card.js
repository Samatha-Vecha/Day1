import React,{ useState , useEffect} from 'react';
import "./Card.css";
function CardUI(props){
    const width = 250;
    const [count, setCount] = useState(0);
    useEffect(()=>{
        //setCount(5);
        console.log('use effect is called');
    },[count] );
    const buttonClickAdd = () => {
        setCount(count+1);
    }
    const buttonClickSubtract = () => {
        if(count > 0)
            setCount(count-1);
    }
    return (
        <div className="card" style={{width}}>
            <img src="profile_logo.png" 
            alt="logo"
            style={{border: '0px solid #000000',
                    borderRadius: '20px'
                    
            }} className="card-img"/>
            <div className="card-body">
                <h1 className="card-title">{props.userFromArr.Name}</h1>
                <p className="card-text">{props.userFromArr.desc}</p>
            </div>
           <button type="button" className="btn btn-primary">Connect</button>
           <div>
            {
            count === 0 ? 
                    (<button className="btn btn-success" onClick = {buttonClickAdd} style={{margin:'15px'}}>Add to Cart</button>) : 
                    (<div style={{display:'flex' , height:'40px',margin:'15px'}}>
                        <button className="btn btn-dark" onClick={buttonClickAdd}>+</button>
                        <h1 style={{margin:'0px 15px'}}>{count}</h1>
                        <button className="btn btn-primary" onClick={buttonClickSubtract}>-</button>
                    </div>)
            }
            </div>
        </div>
       
    )
}
export default CardUI;