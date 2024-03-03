import { Helmet } from "react-helmet";
import logo from "../../assets/logo.svg";
import { RegisterForm } from "../../components/RegisterForm";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {

    const navigate = useNavigate()

    const returnLogin = () => {
        navigate("/")
    }
    
    return (
        <>
        <Helmet>
            <title>Cadastrar-se na Kenzie Hub</title>
        </Helmet>
        <div className={styles.container}>
            <header>
                <img src={logo} alt="Kenzie Hub" />
                <button onClick={returnLogin}>Voltar</button>
            </header>
            <RegisterForm/>
        </div>
        </>
    )
}