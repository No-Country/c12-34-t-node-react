import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext({ 
    userId: null,  
    userNameRegistered: null,  
    userEmailRegistered: null,  
    userTokenRegistered: null, 
    userCargoRegistered: null,              
    updateUser: () => {},
    updateUserNameRegistered: () => {},
    updateUserEmailRegistered: () => {},
    updateUserTokenRegistered: () => {},
    updateUserCargoRegistered: () => {}     
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
    const storedUserNameRegistered = sessionStorage.getItem('userEmailRegistered');
    return storedUserNameRegistered !== null ? storedUserNameRegistered : null;   
});


const [userTokenRegistered, setUserTokenRegistered] = useState(() => {          
    const storedUserNameRegistered = sessionStorage.getItem('userTokenRegistered');
    return storedUserNameRegistered !== null ? storedUserNameRegistered : null;   
});

const [userCargoRegistered, setUserCargoRegistered] = useState(() => {          
  const storedUserCargoRegistered = sessionStorage.getItem('userCargoRegistered');
  return storedUserCargoRegistered !== null ? storedUserCargoRegistered : null;   
});




const updateUser = (id) => {                 
    setUserId(id);
    sessionStorage.setItem('userId', id);       
};

const updateUserNameRegistered = (name) => { 
    setUserNameRegistered(name)
    sessionStorage.setItem('userNameRegistered', name);  
}

const updateUserEmailRegistered = (email) => { 
    setUserEmailRegistered(email)
    sessionStorage.setItem('userEmailRegistered', email);  
}
const updateUserTokenRegistered = (token) => { 
    setUserTokenRegistered(token)
    sessionStorage.setItem('userTokenRegistered', token);  
}
const updateUserCargoRegistered = (cargo) => { 
  setUserCargoRegistered(cargo)
  sessionStorage.setItem('userCargoRegistered', cargo);  
}

useEffect(() => {
    const handleStorageChange = (event) => {     
      if (event.key === 'userId' && event.key === "userNameRegistered" && event.key === "userEmailRegistered" && event.key === "userTokenRegistered") {             
        setUserId(event.newValue);
        setUserNameRegistered(event.newValue);
        setUserEmailRegistered(event.newValue);
        setUserTokenRegistered(event.newValue);
        setUserCargoRegistered(event.newValue);
      }
    };
    window.addEventListener('storage', handleStorageChange); 
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <UserContext.Provider value={{ userId, userNameRegistered, userCargoRegistered, userEmailRegistered, userTokenRegistered,  updateUser, updateUserCargoRegistered, updateUserNameRegistered, updateUserEmailRegistered, updateUserTokenRegistered}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

          