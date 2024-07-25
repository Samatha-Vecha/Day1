import Login from "./login";
import { useState } from "react";
import Register from "./RegisterForm";
//import Navigation from "./Navigation";
function TabFun() {
    const [isLogin,setIsLogin] = useState(true);
    const showLogin = () => {
        setIsLogin(true)
    }
    const showRegister = () => {
        setIsLogin(false)
    }
    return(
        <div>
            <div style={{textAlign:'center',marginTop:'20px'}}>
                <button onClick={showLogin} className="btn btn-primary" style={{marginRight:'8px'}}>Log In</button>
                <button onClick={showRegister} className='btn btn-primary'>Register</button>
            </div>
        {isLogin ?
            <div>
                <Login />
            </div>
            :
            <div><Register/></div>
        }
        </div>
    );
}
export default TabFun;