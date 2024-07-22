function Three(){
    let arr = ["AIML","AIDS","CSE","IT","CS"];
    const branchList = arr.map((branch,index) => <li key={index}>{branch}</li>);
    return (
        <div>
            <h1>List of branches.</h1>
            <ul>{branchList}</ul>
        </div>
    )
}
export default Three;