import { UserRow } from "./UserRow";

export const UsersList = ({ users = [], handlerRemoveUser, handlerUserSelectedForm }) => {    
    


    return (
        <>
            <table className="table table-hover text-center">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Update</th>  
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
                                handlerRemoveUser = {handlerRemoveUser}
                                handlerUserSelectedForm = { handlerUserSelectedForm }
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};
