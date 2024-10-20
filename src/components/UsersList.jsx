import { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";

export const UsersList = () => {    
    
    const { users = [] } = useContext(UserContext);

    return (
        <>
            <table className="table table-hover text-center">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Update</th>  
                        <th>Update route</th>  
                        <th>Delete</th>  
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map(user => (
                            <UserRow 
                                key = {user.id} 
                                id = {user.id} 
                                username = {user.username}
                                email = {user.email}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};
