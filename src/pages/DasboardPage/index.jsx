import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";
import { Helmet } from "react-helmet";

export const DashboardPage = () => {

    const { logoutFunction, user } = useContext(UserContext)

    console.log(user)

    return (
        <>
        <Helmet>
            <title>Kenzie Hub</title>
        </Helmet>
        <div className={styles.container}>
            <header>
                <img src={logo} alt="Kenzie Hub" />
                <button onClick={logoutFunction}>Sair</button>
            </header>
            <main>
                <div>
                <h2>{`Olá, ${user.name}`}</h2>
                <p>{user.course_module}</p>
                </div>
            </main>
            <section>
                <h2>Que pena! Estamos em desenvolvimento :(</h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </section>
        </div>
        </>
    )
}