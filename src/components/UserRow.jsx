import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const UserRow = ({ id, username, email}) => {

    const { handlerRemoveUser, handlerUserSelectedForm } = useContext(UserContext);

    const onRemoveUser = (id) => {
        handlerRemoveUser(id);
    }

    return (
        <>
            <tr>
                <td> {id} </td>
                <td> {username} </td>
                <td> {email} </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-secondary"
                        onClick={ () => handlerUserSelectedForm({
                            id,
                            username,
                            email,
                        })}>
                        Update
                    </button>
                </td>
                <td>
                    <NavLink className={"btn btn-secondary btn-sm"} to={'/users/edit/'+ id}>Update2</NavLink>
                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-danger"
                        onClick={ () => onRemoveUser(id) }>
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
};
