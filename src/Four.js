function Four(){
    let x = false;
    let val = false;
    return (
        <div>
            {x ? <h2>True</h2> : <div>False</div>}
            {val ? "this is true" : "this is false"}
        </div>
    );
}
export default Four;