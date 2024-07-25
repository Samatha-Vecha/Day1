import React,{ useState , useEffect} from 'react';
import "./Card.css";
import ReviewInput from './Ten';
import Specification from './specifications';
function ProductPage(props){
    
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log(props.value);
        //setCount(5);
        console.log('use effect is called');
    },[]);
    
    const buttonClickAdd = () => {
        setCount(count+1);
    }
    const buttonClickSubtract = () => {
        if(count > 0)
            setCount(count-1);
    }
    return(
        <div style={{margin: '10px'}}>
            <div className="product-container">
                    <img src={`${process.env.PUBLIC_URL}/cam.jpg`} alt="camera" 
                        style={{
                            height:'230px',
                            width:'400px',
                            marginRight:'20px'
                        }}/>
                    <div className="product-details">
                        <div className="card-body">
                            <h1 className="card-title">{props.value.prod_name}</h1>
                            <p className="card-text">{props.value.prod_desc}</p>
                        </div>
                        <div>
                            {
                            count === 0 ? 
                                    (<div style={{ marginTop: '65px' }}>
                                        <p style={{ marginBottom: '5px', fontSize: '18px', fontWeight: 'bold' }}>₹500</p>
                                        <button className="btn btn-success" onClick={buttonClickAdd}>Add to Cart</button>
                                    </div>) :
                                    (<div style={{display:'flex' , height:'40px',marginTop:'40px'}}>
                                        <button className="btn btn-dark" onClick={buttonClickAdd}>+</button>
                                        <h1 style={{margin:'0px 15px'}}>{count}</h1>
                                        <button className="btn btn-primary" onClick={buttonClickSubtract}>-</button>
                                    </div>)
                            }
                        </div>
                    </div>
                
            </div>
            <Specification />
            <ReviewInput />
        </div>
        );
}
export default ProductPage;