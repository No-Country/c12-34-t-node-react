import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext({ 
    userId: null,  
    userNameRegistered: null,  
    userEmailRegistered: null,  
    userTokenRegistered: null,          
    updateUser: () => {},
    updateUserNameRegistered: () => {},
    updateUserEmailRegistered: () => {},
    updateUserTokenRegistered: () => {}     
});


const UserProvider = ({ children }) => {  
    
    
const [userId, setUserId] = useState(() => {          
     const storedUserId = sessionStorage.getItem('userId'); 
     return storedUserId !== null ? storedUserId : null;   
 });

 const [userNameRegistered, setUserNameRegistered] = useState(() => {          
    const storedUserNameRegistered = sessionStorage.getItem('userNameRegistered');
    return storedUserNameRegistered !== null ? storedUserNameRegistered : null;   
});

const [userEmailRegistered, setUserEmailRegistered] = useState(() => {          
    const storedUserNameRegistered = sessionStorage.getItem('userNameRegistered');
    return storedUserNameRegistered !== null ? storedUserNameRegistered : null;   
});


const [userTokenRegistered, setUserTokenRegistered] = useState(() => {          
    const storedUserNameRegistered = sessionStorage.getItem('userNameRegistered');
    return storedUserNameRegistered !== null ? storedUserNameRegistered : null;   
});




const updateUser = (id) => {                 
    setUserId(id);
    console.log("aca estoy ")
    sessionStorage.setItem('userId', id);       
};

const updateUserNameRegistered = (name) => { 
    setUserNameRegistered(name)
    console.log("Cambiando nombre")
    sessionStorage.setItem('userNameRegistered', name);  
}

const updateUserEmailRegistered = (email) => { 
    setUserEmailRegistered(email)
    console.log("Cambiando nombre")
    sessionStorage.setItem('userEmailRegistered', email);  
}
const updateUserTokenRegistered = (token) => { 
    setUserTokenRegistered(token)
    console.log("Cambiando Token")
    sessionStorage.setItem('userTokenRegistered', token);  
}

useEffect(() => {
    const handleStorageChange = (event) => {     
      if (event.key === 'userId' && event.key === "userNameRegistered" && event.key === "userEmailRegistered" && event.key === "userTokenRegistered") {             
        setUserId(event.newValue);
        setUserNameRegistered(event.newValue);
        setUserEmailRegistered(event.newValue);
        setUserTokenRegistered(event.newValue);
      }
    };
    window.addEventListener('storage', handleStorageChange); 
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <UserContext.Provider value={{ userId, userNameRegistered, userEmailRegistered, userTokenRegistered,  updateUser, updateUserNameRegistered, updateUserEmailRegistered, updateUserTokenRegistered}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

          