import { useState } from "react";


const useLocalStorage = (key, initialValue) => {
   
    
    const [state, setState] = useState(() => {
            console.log(111111)
        try {

            let item = localStorage.getItem(key);
       
            return item 
                  ? JSON.parse(item) 
                  : initialValue;
        } catch(err) {
            console.log(err);
            return initialValue;
        }
    
           
        });

        const setItem = (value) =>{
             try{
                 localStorage.setItem(key, JSON.stringify(value));
                  setState(value);
             }catch(err) {

             }

        }
    return [
     state,
     setItem
    ];
};

export default useLocalStorage;