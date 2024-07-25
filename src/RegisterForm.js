import "./Card.css";
import { useState } from "react";
function Register() {
    const [collegeId,setCollegeId] = useState('');
    const [passwordValue,setPassword] = useState('');
    const [emailValue,setEmail] = useState('');
    const [branchValue,setBranch] = useState('');
    const [yearValue,setYear] = useState('');
    const [genderValue,setGender]=useState('Female');
    const [userValue,setUser] = useState('');
    const getCollegeId = (event) => {
        setCollegeId(event.target.value)
        console.log(collegeId);
    }
    const getPassword = (event) => {
        setPassword(event.target.value)
        console.log(passwordValue);
    }
    const getEmail = (event) => {
        setEmail(event.target.value)
        console.log(emailValue);
    }
    const getBranch = (event) => {
        setBranch(event.target.value)
        console.log(branchValue);
    }
    const getYear = (event) => {
        setYear(event.target.value)
        console.log(yearValue);
    }
    const getGender = (event) => {
        setGender(event.target.value)
        console.log(event.target.value);
    }
    const submitData = (event) => {
        event.preventDefault();
        const obj = {
            collegeId,passwordValue,emailValue,branchValue,genderValue
        }
        setUser(obj);
        console.log(obj);
        console.log(userValue);
    }
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:'40px'}}>
        <div className="card-for-register" style={{width: '19rem'}}>
            <h5 className="card-title">Register</h5>
            <p style={{textAlign:'left'}}>Provide your details to login.</p>
            <form>
                <h6 style={{textAlign:'left'}}>College Id</h6>
                <input type='text' style={{width:'14rem'}} onChange={getCollegeId} placeholder="Enter College Id"/>
                <h6>Password</h6>
                <input type='password'  style={{width:'14rem'}} onChange={getPassword} placeholder="Enter Password"></input>
                <h6>Email address</h6>
                <input type='text' style={{width:'14rem'}} onChange={getEmail} placeholder="Enter Email"></input>
                <h6>Branch</h6>
                <select className="form-select" value={branchValue} onChange={getBranch}>
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="CS">CS</option>
                    <option value="AIML">AIML</option>
                    <option value="AIDS">AIDS</option>
                </select>
                <h6>Year</h6>
                <select className="form-select"  onChange={getYear}>
                    <option value=''>Select Year</option>
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                </select>
                <h6>Gender</h6>
                <div  style={{display:'flex'}}>
                    <input  type="checkbox" value="Female" id="flexCheckDefault2" checked={genderValue === 'Female'} onChange={getGender}/>Female
                    <input  type="checkbox" value="Male" id="flexCheckDefault1" checked={genderValue === 'Male'} onChange={getGender}/>Male
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: '60px' }}>
                    <button type='submit' className="btn btn-primary" style={{ width: 'auto' }} onClick={submitData}>Register</button>
                </div>
            </form>
        </div>
        </div>
    )
}
export default Register;