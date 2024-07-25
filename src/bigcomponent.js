import Product1 from "./ProductUI";
import Spec from "./specifications";
import ReviewInput from "./Ten";
function Big(){
    return(
        <>
        <h1>Product Name</h1>
        <div style={{ margin: '20px' }}>
            <Product1 /> 
            <Spec />
            <ReviewInput />
        </div>
        </>
    );
}
export default Big;