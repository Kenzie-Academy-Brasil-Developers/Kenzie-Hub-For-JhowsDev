import { ImPencil } from "react-icons/im";
import { HiTrash } from "react-icons/hi2";
import { useContext } from "react";
import { TechContext } from "../../../provider/TechContext";

export const TechCard = ({ tech }) => {

    const { setEditing, deletTech } = useContext(TechContext)

    return(
        <>
            <li>
                <h3>{tech.title}</h3>
                <div>
                    <p>{tech.status}</p>
                    <button onClick={() => setEditing(tech)}><ImPencil size={12} color="var(--grey-0)"/></button>
                    <button onClick={() => deletTech(tech.id)}><HiTrash size={12} color="var(--grey-0)"/></button>
                </div>
            </li>
        </>
    )
}