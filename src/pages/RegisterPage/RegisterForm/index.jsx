import { useForm } from "react-hook-form"
import { InputRegister } from "../InputRegister"
import styles from "./styles.module.scss"
import { zodResolver } from "@hookform/resolvers/zod"
import { formRegisterSchema } from "./FormSchema"
import { api } from "../../../services/api"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(formRegisterSchema)
    })

    const notifySecess = () => {
        toast.success("Produto Adicionado no carrinho !!", {
           position:"top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

    const notifyError = () => {
        toast.error("Ops! Algo deu errado", {
           position: "top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

    const submitApi = async (formData) => {
        try {
            const { data } = await api.post("/users", formData)
            notifySecess()
        } catch (error) {
            console.log(error)
            notifyError()
        }
    }
    
    const submitForm = (formData) => {
        submitApi(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)} className={styles.formRegister}>
                <h2>Crie sua conta</h2>
                <p>Rapido e grátis, vamos nessa</p>
                <InputRegister label="Nome" errors={errors.name} placeholder="Digite aqui seu nome" type="text" {...register("name")}/>

                <InputRegister label="Email"  errors={errors.email} placeholder="Digite aqui seu email" type="email" {...register("email")}/>

                <InputRegister label="Senha"  errors={errors.password} placeholder="Digite aqui sua senha" type="password" {...register("password")}/>

                <InputRegister label="Conformar Senha"  errors={errors.confirmPassword} placeholder="Digite novamente sua senha" type="password" {...register("confirmPassword")}/>

                <InputRegister label="Bio"  errors={errors.bio} placeholder="Fale sobre você" type="text" {...register("bio")}/>

                <InputRegister label="Contato"  errors={errors.contact} placeholder="Opção de contato" type="text" {...register("contact")}/>

                <div>
                    <label>Selecionar módulo</label>
                    <select {...register("course_module")}>
                        <option value="">Selecione o Módulo</option>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                    </select>
                    {errors.course_module ? <p>{errors.course_module.message}</p> : null}
                </div>
              
                <button className={styles.registerButton}>Cadastrar</button>
            </form>
            <ToastContainer />
        </div>
    )
}