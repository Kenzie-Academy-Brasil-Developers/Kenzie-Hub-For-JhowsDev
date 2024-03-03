import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const notifySecessLogin = () => {
        toast.success("Acesso realizado com sucesso!", {
           position:"top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

    const notifyErrorLogin = () => {
        toast.error("Usuário ou senha invalidos!", {
           position: "top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

    const loginFunction = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData)
            setUser(data.user)
            localStorage.setItem("@KenzieHub: userToken", data.token)
            notifySecessLogin()
            navigate("/dashboard")
        } catch (error) {
            notifyErrorLogin()
            console.log(error)
        }
    }

    const notifySecessRegister = () => {
        toast.success("Conta criada com sucesso!", {
           position:"top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

    const notifyErrorRegister = () => {
        toast.error("Ops! Algo deu errado", {
           position: "top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

    const registerFunction = async (formData) => {
        try {
            const { data } = await api.post("/users", formData)
            notifySecessRegister()
            navigate("/")
        } catch (error) {
            console.log(error)
            notifyErrorRegister()
        }
    }

    const logoutFunction = () => {
        setUser({})
        localStorage.removeItem("@KenzieHub: userToken")
        navigate("/")
    }

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@KenzieHub: userToken")

            if(token) {
                try {
                    const { data } = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                         },
                    })
                    setUser(data)
                    console.log(data)
                    navigate("/dashboard")
                } catch (error) {
                    console.log(error)
                    localStorage.removeItem("@KenzieHub: userToken")
                }
            }
        }
        loadUser()
    },[])

    return (
        <UserContext.Provider value={{ user, loginFunction, registerFunction, logoutFunction }}>
            {children}
        </UserContext.Provider>
    )
}