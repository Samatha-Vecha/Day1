import { useState,useContext } from "react";
import { globalContext } from "./App";

function Register(){
    const [collegeId, setCollegeId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [branch, setBranch] = useState("");
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");
    const [user,setUser] = useState([]);
    const {globalObject,setglobalObject} = useContext(globalContext);

    //const [studentData, setStudentData] = useState([]);
    const getCollegeId = (event) => {
        setCollegeId(event.target.value);
        console.log(event.target.value);
    }
    const getPassword = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }
    const getEmail = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    const getBranch = (event) => {
        setBranch(event.target.value);
        console.log(event.target.value);
    }
    const getYear = (event) => {
        setYear(event.target.value);
        console.log(event.target.value);
    }
    const getGender = (event) => {
        setGender(event.target.value);
        console.log(event.target.value);
    }
    const submitData = (event) => {
        event.preventDefault();
        const obj = {
            collegeId, password, email, branch, year, gender
        }
        console.log(obj);
        setUser(obj);
        console.log(user);
        setglobalObject(obj);
        setCollegeId("");
        setPassword("");
        setEmail("");
        setBranch("");
        setYear("");
        setGender("");
    }
    return (
    <div style={{border:"1px solid gray",padding:'10',margin:'30 auto',width:'18rem',borderRadius:'8px',borderWidth:'1px'}}>
        <div style={{ display: 'flex', flexDirection:"column", justifyContent: 'flex-start' }}>
            <h3>Register</h3>
            <p>Provide your details to login</p>
        </div>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputId" className="form-label">College Id</label>
                <input type="text" 
                       className="form-control" 
                       id="exampleInputId" 
                       placeholder="College Id" 
                       onChange={getCollegeId}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" 
                       className="form-control"  
                       id="exampleInputPassword1" 
                       placeholder="Password" 
                       onChange={getPassword}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email"
                       className="form-control"
                       id="exampleInputEmail1" 
                       aria-describedby="emailHelp" 
                       placeholder="Email address"
                       onChange={getEmail}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputBranch" className="form-label">Branch</label>
                <select className="form-select" aria-label="Default select example" value={branch} onChange={getBranch}>
                    <option value="" selected>Select a branch</option>
                    <option value="CSE">CSE</option>
                    <option value="AIML">AIML</option>
                    <option value="AIDS">AIDS</option>
                    <option value="IT">IT</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputYear" className="form-label">Year</label>
                <select className="form-select" aria-label="Default select example" value={year} onChange={getYear}>
                    <option value="" selected>Select a year</option>
                    <option value="1">First</option>
                    <option value="2">Second</option>
                    <option value="3">Third</option>
                    <option value="4">Fourth</option>
                </select>
            </div>
            <label htmlFor="exampleInputYear" className="form-label">Gender</label>
            <div style={{display:'flex'}}>
                <div style={{marginRight:'10'}}>
                    <input type="radio" checked={gender === "Male"} value="Male" onChange={getGender}/>
                    <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div style={{marginRight:'10'}}>
                    <input type="radio" checked={gender === "Female"} value="Female" onChange={getGender}/>
                    <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                <div style={{marginRight:'10'}}>
                    <input type="radio" checked={gender === "Other"} value="Other" onChange={getGender}/>
                    <label className="form-check-label" htmlFor="other">Other</label>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn btn-primary" onClick={submitData}>Register</button>
            </div>
        </form>
    </div>
    );
}
export default Register;