import { UserRow } from "./UserRow";

export const UsersList = ({ users = [] }) => {    
    
    return (
        <>
            <table className="table table-hover">
                <thead className="table-light">
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
                                key={user.id} 
                                id={user.id} 
                                username={user.username}
                                email={user.email}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};
