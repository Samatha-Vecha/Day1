import ReactDOM from "react-dom/client";
import Card from "./Card";
import Five from "./Five";
const rootElement = document.getElementById('root');
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(
    <>
        <Card />
        <Five />
    </>
);