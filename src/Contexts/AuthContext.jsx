import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuthorized, setIsAuthorized] = useState(false)
    const [Msg, setMsg] = useState("")

    function Login(username, password) {
        fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": username,
                "password": password
            })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.token || data.error)
                if(data.token)
        {
            setIsAuthorized(true)
            setMsg("Login Successfull")
        }
        else{
            setMsg(data.error)
        }
            })


        
    }


    function LogOut()
    {
        setIsAuthorized(false)
    }


    return (
        <AuthContext.Provider value={{isAuthorized, Login, LogOut,Msg}} >
            {children}
        </AuthContext.Provider>
    )
}