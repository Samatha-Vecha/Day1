//consumer of context
import "./Card.css";
import { useContext,useEffect, useRef,useState } from "react";
import { globalContext } from "./App";
//import Register from "./RegisterForm";
function LoginForm(){
    const firstRef = useRef(null); //reference which is used on a particular DOM element.
    const secRef = useRef(null);
    const [resultMessage,setMessage] = useState('');
    const {setGlobalIsLogin,globalObject} = useContext(globalContext);
    useEffect(()=>{
        if(firstRef.current)
            firstRef.current.focus(); //cursor will come in firstRef text area when component is refreshed.
    },[]);
    const formSubmitted = (event) => {
        event.preventDefault();
        console.log('Form Submitted!');
        console.log(firstRef.current.value);
        if(firstRef.current.value ===  globalObject.collegeId && secRef.current.value === globalObject.password){
            setMessage('you are successfully logged in');
            setGlobalIsLogin(true);
            localStorage.setItem("name","ReactJS");
        } else {
            setMessage('not matched');
            setGlobalIsLogin(false);
        }
        firstRef.current.value=''; //clear value.
        secRef.current.value='';

    }
    return(
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:'100px'}}>
        <div className="card-for-login" style={{width: '17rem'}}>
            <h5 className="card-title">Login</h5>
            <p style={{textAlign:'left'}}>Provide your details to login.</p>
            <form onSubmit={formSubmitted}>
                <h6 style={{textAlign:'left'}}>College Id</h6>
                <input type='text' ref={firstRef} style={{width:'14rem'}} placeholder="Enter CollegeId"/>
                <h6>Password</h6>
                <input type='password' ref={secRef} style={{width:'14rem'}} placeholder="Enter Password"></input>
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: '60px' }}>
                    <button type='submit' className="btn btn-primary" style={{ width: 'auto' }}>Login</button>
                </div>
            </form>
            <p>{resultMessage}</p>
        </div>
        </div>
    );
}
export default LoginForm;