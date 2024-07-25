import { useRef } from "react";

function Eleven() {
    const firstRef = useRef(null); //reference which is used on a particular DOM element.
    
    const formSubmitted = (event) => {
        event.preventDefault();
        console.log('Form Submitted!');
        console.log(firstRef.current.value);
        firstRef.current.value=''; //clear value.
    }
    
    return (
        <div>
            <form onSubmit={formSubmitted}>
                <input type='text' ref={firstRef}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
export default Eleven;