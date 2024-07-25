import React, { useState } from 'react';
import "./Card.css";
function ReviewInput() {
    
    const [review, setReview] = useState('');  
    const [reviews, setReviews] = useState([]); 

    const addReview = () => {
       
            setReviews([...reviews, {name:'Reviewer name',text:review}]);  
            setReview('');  
            
        
    }

    const inputTextChange = (event) => {
        setReview(event.target.value);  
    }

    return (
        <div className='review-container'>
            <h3 style={{padding:'8px',fontSize:'20px'}}>Reviews</h3>
            <input 
                type="text" 
                placeholder="Enter a review" 
                value={review} 
                onChange={inputTextChange}
            style={{marginRight:'8px',width:'85%',height:'35px',borderRadius:'9px',borderWidth:'1px',borderColor:'gray'}}/>
            <button className="btn btn-dark" onClick={addReview}>Add Review</button>
            <div>
                {reviews.map((item, index) => (
                    <div key={index} style={{ margin: '10px 0' }}>
                        <p style={{ margin: '0', display: 'inline', marginRight: '5px' }}>{item.name}</p>
                        <br/>
                        <span>{item.text}</span>
                    </div> 
                ))}
            </div>
        </div>
    );
}

export default ReviewInput;
