import { Link, useNavigate } from "react-router-dom"
import { InputLogin } from "../InputLogin"
import { useForm } from "react-hook-form"
import styles from "./styles.module.scss"
import { zodResolver } from "@hookform/resolvers/zod"
import { formLoginSchema } from "./FormLoginSchema"
import { api } from "../../../services/api"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = ({ setUser }) => {

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(formLoginSchema)
    })

    const navigate = useNavigate()

    const notifyError = () => {
        toast.error("Ops! Algo deu errado", {
           position: "top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

    const submitApi = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData)
            setUser(data)
            localStorage.setItem("@KenzieHub: userToken", data.token)
            navigate("/dashboard")
        } catch (error) {
            notifyError()
            console.log(error)
        }
    }

    const submitForm = (formData) => {
        submitApi(formData)
    }
    
    return (
        <>
        <form onSubmit={handleSubmit(submitForm)} className={styles.formLogin}>
            <h2>Login</h2>
            <InputLogin label="Email" errors={errors.email} placeholder="Digite aqui seu email" type="email" {...register("email")}/>
            <InputLogin label="Senha" errors={errors.password} placeholder="Digite aqui sua senha" type="password" {...register("password")}/>
            <button className={styles.loginButton}>Entrar</button>
            <Link to={"/register"} className={styles.link}>Ainda não possui uma conta?</Link>
            <button className={styles.registerButton}>Cadastre-se</button>
        </form>   
        <ToastContainer />
        </>

    )
}

