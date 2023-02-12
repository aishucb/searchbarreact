import {FC} from "react";
import React from 'react'
import ReactDOM from 'react-dom/client'
interface IHelloProps
{
    math1:string
}
export const Hello: FC<IHelloProps> = (props) =>
{
  let a=1
  const root = ReactDOM.createRoot(
    document.getElementById('root')as HTMLElement
  );
  const show=()=>
  {
      const element = (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
      root.render(element);
  }
  return(
    
<button onClick={show}>{props.math1}</button> 

)
}
export default Hello