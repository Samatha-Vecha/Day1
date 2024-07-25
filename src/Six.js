function Six(){
    const names = ["name1","name2","name3","name4"]
    return (
        <div>
            {
                names.map((namee,index)=>
                <div key={index}>{namee}</div>)
            }
        </div>
    );
}
export default Six;