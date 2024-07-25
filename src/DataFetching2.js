import { useEffect,useState } from "react";
import axios from "axios";
function DataFetching_axios() {
    const [counts, setCounts] = useState([]); // Initialize counts for each product
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchMyData = async () => { //async: When you tell a function it’s async, you're saying, "This function might take some time, so get ready to wait."
                const res = await axios.get('https://fakestoreapi.com/users');
                console.log(res);
                console.log(res.ok);
                const resData = await res.data; //await: This is like a special pause button. When you use await, you're saying, "Okay, I’m going to wait here until this task is done."
                setData(resData);
                console.log(resData)
                //setData(resData);
                //setCounts(Array(resData.length).fill(0));
        } 
        fetchMyData();
    },[])
    return (
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Phone</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email Id</th>
                <th scope="col">City</th>
                <th scope="col">Zipcode</th>
                </tr>
            </thead>
            <tbody>
                    {
                        data.map((dataItem,index)=>
                            <tr key={index}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.username}</td>
                                <td>{dataItem.phone}</td>
                                <td>{dataItem.name.firstname}</td>
                                <td>{dataItem.name.lastname}</td>
                                <td>{dataItem.email}</td>
                                <td>{dataItem.address.city}</td>
                                <td>{dataItem.address.zipcode}</td>
                            </tr>
                        )
                    }
            </tbody>
        </table>
    );
}
export default DataFetching_axios;