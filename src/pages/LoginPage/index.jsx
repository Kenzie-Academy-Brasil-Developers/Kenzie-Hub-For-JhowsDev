import { LoginForm } from "./LoginForm"
import logo from "../../assets/logo.svg"
import styles from "./styles.module.scss"

export const LoginPage = ({ setUser }) => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="Kenzie Hub" />
            <LoginForm setUser={setUser}/>
        </div>
    )
}