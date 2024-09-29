import { useState } from "react";
import Swal from "sweetalert2";

const initialLoginForm = {
    username: '',
    password: ''
}

export const LoginPage = ({handerLogin}) => {
    
    const [loginForm, setLoginForm] = useState(initialLoginForm);

    const {username, password} = loginForm;

    const onInputChange = ({target}) => {

        const {name, value} = target;
        setLoginForm({
            ...loginForm,
            [name]: value, // Recogemos los valores de los inputs
        });

    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(!username || !password){
            Swal.fire({
                title: 'Error de campos',
                text: 'Debes completar todos los campos!',
                icon: 'error'
            });
        }

        // Aca implementamos el login
        handerLogin({username, password});

        setLoginForm(initialLoginForm); // Limpiamos y reiniciamos el form
    }
    
    return (
        <>
            <div className="modal" style={{display: "block"}} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login Page</h5>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="modal-body">
                                <input
                                    className="form-control my-3 w-75"
                                    placeholder="Username"
                                    autoComplete="off"
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={onInputChange}
                                />

                                <input
                                    className="form-control my-3 w-75"
                                    placeholder="Password"
                                    autoComplete="off"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={onInputChange}
                                />

                            </div>
                            <div className="modal-footer">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
