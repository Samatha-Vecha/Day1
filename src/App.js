import { BrowserRouter, Route, Routes } from "react-router-dom"
import DataFetching from "./DataFetching"
import ProductComponent from "./ProductUI"
import HomePage from "./Home"
import Profile from "./Profile"; 
//import Navigation from "./Navigation";
import { createContext,useState } from "react"
export const globalContext = createContext(); 
function App(){
    const [globalCount,setglobalCount] = useState(0);
    const [globalObject, setglobalObject] = useState({}); 
    const [globalIsLogin,setGlobalIsLogin] = useState(false);
    return (
        <globalContext.Provider value = {{globalCount,setglobalCount,globalObject,setglobalObject,globalIsLogin,setGlobalIsLogin}}>
                <BrowserRouter>
                
                    <Routes>
                        <Route path='/' element={<HomePage/>}></Route>
                        <Route path='/products' element={<DataFetching />}></Route>
                        <Route path='/products/reviews' element={<ProductComponent/>}></Route>
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </BrowserRouter>
        </globalContext.Provider>
    )
}
export default App;