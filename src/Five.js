import "./review.css";
function Five(){
    const reviews = [{pic:'profile_logo.png',name:'Reviewer name1',comment:'product is good'},{pic:'profile_logo.png',name:'Reviewer name2',comment:'product is not good'}]
    const nc = reviews.map((review,index) => (
        <ul key={index} className="flex-container">
        <div className="review-img">
            <li>
                <img src={review.pic} alt="profile" />
            </li>
        </div>
        <div className="review-content">
            <li>{review.name}</li>
            <li>{review.comment}</li>
        </div>
    </ul>
    ));
    return (
        <div>
            <h1>Reviews</h1>
            <ul>{nc}</ul>
        </div>
    );
}
export default Five;