import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, SetStateAction, useState, FC } from 'react'
import 'react-dropdown/style.css';
import data from './assets/text/MOCK_DATA.json';
import styles from '../mystyle.module.css'; 
import ReactDOM from 'react-dom/client'
import style from './Searchbar.css'
const root = ReactDOM.createRoot(
  document.getElementById('result')as HTMLElement
);
export default function App() {
  const [value, setValue] = useState("");



  const onChange = (event: { target: { value: SetStateAction<string>; }; }) => {

    setValue(event.target.value);
  };

  const onSearch = (searchTerm: SetStateAction<string>) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
   
  };

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
    
  return (
    
    <div className="App ">
      
      <div className="search-container">
        <div className="search-inner">
          <input type="text" placeholder="Type here" className={style.inputext} value={value} onChange={onChange}  />
          <button onClick={() => onSearch(value)} className={style.button2}> Search </button>
        </div>
        <div className="dropdown" id="serachbox1">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.includes(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 4)
            .map((item) => (
              <div
                onClick={() => {
                  onSearch(item.full_name);
                 

                  
                  
                }}
                className="dropdown-ite"
                key={item.full_name}
              >
                
                <button onClick={show} className={styles.button1}>{item.full_name}</button>
              </div>
              
            ))}
        </div>
      </div> 
      
      
    </div>
     
  );
  
}

