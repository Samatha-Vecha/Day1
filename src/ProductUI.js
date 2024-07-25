import ProductPage from "./Product";
function ProductComponent() {
    const product_desc = [
        { 
          prod_name:'Camera',
          prod_desc:'an instrument used to capture and store images and videos, either digitally via an electronic image sensor, or chemically via a light-sensitive material such as photographic film.'
        }
    ];
    return(
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {
                product_desc.map(
                    (prod,index) => (<ProductPage key={index} value = {prod} />
                                    )
                        )
            }
        </div>
    );
}
export default ProductComponent;