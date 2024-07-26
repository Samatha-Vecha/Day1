import React, { useContext,useEffect,useState } from 'react';
import { globalContext } from './App';
import Navigation from './Navigation';
function Profile() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    useEffect(() => {
        const name = localStorage.getItem("name");
        console.log(name);
    })
    const { globalObject } = useContext(globalContext);
    const {setGlobalIsLogin} = useContext(globalContext)
    if (!globalObject) {
        return <div>Please register first.</div>;
    }
    const logoutAction = () => {
        setGlobalIsLogin(false);
    }
    return (
       <div>
         <Navigation/>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            
            <div style={{ border: '1px solid #000000', borderRadius: '8px', borderWidth: '1px', padding: '20px', maxWidth: '400px', width: '100%' }}>
                <h5 style={{color:'blueviolet',fontSize:'30px',fontWeight:'700'}}>Profile</h5>
                <p style={{color:'gray'}}>Your Details</p>
                <p><strong style={{color:'gray'}}>College ID:</strong> {globalObject.collegeId}</p>
                <p><strong style={{color:'gray'}}>Password:</strong>
                    <b>
                        {showPassword ? globalObject.password : '••••••••'}
                        <u style={{ cursor: 'pointer' }} onClick={togglePasswordVisibility}>
                            {showPassword ? ' Hide' : ' Show'}
                        </u>
                    </b>
                </p>
                <p><strong style={{color:'gray'}}>Email:</strong> {globalObject.email}</p>
                <p><strong style={{color:'gray'}}>Branch:</strong> {globalObject.branch}</p>
                <p><strong style={{color:'gray'}}>Year:</strong> {globalObject.year}</p>
                <p><strong style={{color:'gray'}}>Gender:</strong> {globalObject.gender}</p>
                <button className='btn btn-secondary' onClick={logoutAction}>Logout</button>
            </div>
        </div>
        </div>
    );
}

export default Profile;
