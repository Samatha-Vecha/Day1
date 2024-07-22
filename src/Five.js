function Five(){
    const reviews = [{name:'Reviewer name1',comment:'product is good'},{name:'Reviewer name2',comment:'product is not good'}]
    const nc = reviews.map((review,index) => <div key={index}>
        <h3>{review.name}</h3>
        <p>{review.comment}</p>
    </div>);
    return (
        <div>
            <img src="cam.jpg" alt="cam" height="50px" width = "50px"/>
            <ul>{nc}</ul>
        </div>
    );
}
export default Five;