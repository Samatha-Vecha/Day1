import { Link } from "react-router-dom";
import { useContext } from "react";
import {  globalContext } from "./App";

function Navigation() {
    const {globalCount,setglobalCount} = useContext(globalContext);
    const { globalObject } = useContext(globalContext);
    return (
        <div style={{display:'flex', gap:'10px',flexDirection:'row',justifyContent:'space-between',background:'#FFEFEE',height:'40px'}}>
            <div style={{display:'flex',gap:'10px',cursor:'pointer',margin:'8px'}}>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
            </div>
            <div style={{display:'flex',gap:'10px',cursor:'pointer',margin:'8px'}}>
                <Link to='/cart'>{(globalCount > 0) ? '🥳' : '🙃'}Cart({globalCount})</Link>
                {globalObject ? (
                    <Link to='/profile'>Profile</Link> // Link to the profile page
                ) : (
                    <Link to='/register'>Register</Link>
                )}
            </div>
        </div>
    );
}
export default Navigation;