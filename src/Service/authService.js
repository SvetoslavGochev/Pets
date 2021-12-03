
const baseUrl = 'http://localhost:3030';


export const login = async (email, password) => {

   
    let res = await fetch(`${baseUrl}/users/login`,{
        method: 'POST',
        headers:{
            'content-type': 'aplication/json'
        },
        body: JSON.stringify({email, password})

    });

  let jsonResult = await res.json();


    if(res.ok){
        return jsonResult;
    } else {
        throw jsonResult
    }
  
};

export const logout = () => {
    fetch(`${baseUrl}/users/loguot`)
}

export const getUser = () => {
  let username =  localStorage.getItem('username');

   return username ;
};


export const isAuthentivcated = () => {
    return Boolean(getUser());
};