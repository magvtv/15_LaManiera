import React from "react"
import { ReactDOM } from "react-dom/client";


const myElement = React.createElement('h2', {}, "Interesting none use of JSX!");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement)

