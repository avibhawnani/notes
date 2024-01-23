import UserContext from './userContext'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    return (
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider