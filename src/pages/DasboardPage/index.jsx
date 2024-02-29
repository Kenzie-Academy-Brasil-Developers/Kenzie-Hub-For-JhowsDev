import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"
import styles from "./styles.module.scss"

export const DashboardPage = ({ user, setUser }) => {

    const navigate = useNavigate()

    const logout = () => {
        setUser({})
        localStorage.removeItem("@KenzieHub: userToken")
        navigate("/")
    }

    return (
        <div className={styles.container}>
            <header>
                <img src={logo} alt="Kenzie Hub" />
                <button onClick={logout}>Sair</button>
            </header>
            <main>
                <div>
                <h2>{`Olá, ${user.user.name}`}</h2>
                <p>{user.user.course_module}</p>
                </div>
            </main>
            <section>
                <h2>Que pena! Estamos em desenvolvimento :(</h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </section>
        </div>
    )
}