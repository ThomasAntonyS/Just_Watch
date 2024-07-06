import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

const ProfileContextProvider = ({ children }) => {

    const [user,setUser] = useState('')
    const [watchlist,setWatchlist] = useState([])
    
  return (
    <ProfileContext.Provider value={{user,setUser,watchlist,setWatchlist}}>
      {children}
    </ProfileContext.Provider>
  ); 
};

export default ProfileContextProvider;