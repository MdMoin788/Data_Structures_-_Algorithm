import { createContext, useState } from "react";
import "../Components/Css/Css.css"
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [isAuth, setisAuth] = useState(false);
    function toggleAuth() {
        setisAuth(pre => !pre);
        console.log(isAuth);
    }
    return (
        <AuthContext.Provider value={{ isAuth, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
