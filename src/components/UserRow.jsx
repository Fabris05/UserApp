export const UserRow = ({ id, username, email, handlerRemoveUser, handlerUserSelectedForm}) => {

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
