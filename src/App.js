import { BrowserRouter, Route, Routes } from "react-router-dom"
import DataFetching from "./DataFetching"
import ProductComponent from "./ProductUI"
import HomePage from "./Home"
import { createContext,useState } from "react"
export const globalContext = createContext();
function App(){
    const [globalCount,setglobalCount] = useState(0);
    return (
        <globalContext.Provider value = {{globalCount,setglobalCount}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}></Route>
                    <Route path='/products' element={<DataFetching />}></Route>
                    <Route path='/products/reviews' element={<ProductComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </globalContext.Provider>
    )
}
export default App;