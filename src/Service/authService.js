export const login = async (email, password) => {

   
    let res = await fetch('http://localhost:3030/users/login',{
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
    localStorage.removeItem('username');
}

export const getUser = () => {
  let username =  localStorage.getItem('username');

   return username ;
};


export const isAuthentivcated = () => {
    return Boolean(getUser());
};