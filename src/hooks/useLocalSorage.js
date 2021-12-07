import { useState } from "react";


const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {

      
     let item =   localStorage.getItem(key);

     return item 
           ? JSON.parse(item) 
           : initialValue;
    })

    return [
     state,

    ];
};

export default useLocalStorage;