//Home.js become provider of context
import TabFun from "./Tabfunctionality";
import { useContext } from "react";
//import Register from "./RegisterForm";
//import Profile from "./Profile";
import Welcome from "./Welcome";
import { globalContext } from './App';
 //createContext() is a function in React that allows you to create a context object. This object can be used to share values between components without having to pass props explicitly through every level of the component tree.
function HomePage(){
    //const [isLogin,setIsLogin] = useState(false);
    const {globalIsLogin } = useContext(globalContext);
    return (
        
            <div>
                {
                    globalIsLogin ? <Welcome/> : <TabFun/>
                }
            </div>
       
    );
}
export default HomePage;