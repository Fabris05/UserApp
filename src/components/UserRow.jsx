export const UserRow = ({ id, username, email }) => {
    return (
        <>
            <tr>
                <td> {id} </td>
                <td> {username} </td>
                <td> {email} </td>
                <td>
                    <button type="button" className="btn btn-sm btn-secondary">
                        Update
                    </button>
                </td>
                <td>
                    <button type="button" className="btn btn-sm btn-danger">
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
};
