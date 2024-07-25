//Home.js become provider of context
import TabFun from "./Tabfunctionality";
import { createContext, useState } from "react";
//import { Link } from "react-router-dom";
import Welcome from "./Welcome";
export const UserContext = createContext(); //createContext() is a function in React that allows you to create a context object. This object can be used to share values between components without having to pass props explicitly through every level of the component tree.
function HomePage(){
    const [isLogin,setIsLogin] = useState(false);
    return (
        <UserContext.Provider value={{isLogin,setIsLogin}}>
            <div>
                {
                    isLogin ? <Welcome/> : <TabFun/>
                }
            </div>
        </UserContext.Provider>
    );
}
export default HomePage;