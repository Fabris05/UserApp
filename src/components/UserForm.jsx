import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const UserForm = ({ initialUserForm, userSelected, handlerAddUser, handlerCloseForm}) => {
    
    const [userForm, setUserForm] = useState(initialUserForm);

    const {id, username, password, email} = userForm;

    useEffect( () => {
        setUserForm({
            ...userSelected,
            password: ''
        });
    }, [userSelected])

    const onInputChange = ({ target }) => {
        const { name, value } = target; // Optenemos los valores name y value del target

        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault(); // No recarga la pagina
        
        if(!username || (!password && id === 0 ) || !email){
            Swal.fire({
                title: "Campos vacíos",
                text: "Los campos no pueden estar vacíos...",
                icon: "info"
            });
            return;
        }
        
        // Validacion de email
        if(!email.includes('@')){
            Swal.fire({
                title: "Error en el email",
                text: "El email debe ser válido, incluir un @",
                icon: "info"
            });
            return;
        }
        handlerAddUser(userForm);

        // Guardar el user form en el listado de usuarios
        setUserForm(initialUserForm);
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm); //Reseteamos el formulario
    }

    return (
        <>
            <form onSubmit={ onSubmit }>
                <input
                    className="form-control my-3 w-75"
                    placeholder="Username"
                    autoComplete="off"
                    onChange={ onInputChange }
                    value={ username }
                    name="username"
                />
                {id > 0 || <input
                        className="form-control my-3 w-75"
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        onChange={ onInputChange }
                        value={ password }
                        name="password"
                    />
                }
                
                <input
                    className="form-control my-3 w-75"
                    placeholder="Email"
                    autoComplete="off"
                    onChange={ onInputChange }
                    value={ email }
                    name="email"
                />
                <input 
                    type="hidden" 
                    name="id" 
                    value={ id }
                />
                <button 
                    type="submit" 
                    className="btn btn-primary">
                        {id > 0 ? 'Editar' : 'Registrar'}
                </button>

                {/* Validamos si la funcion handlerCloseForm existe para mostrar el botón cerrar */}

                {
                    !handlerCloseForm || 
                    <button 
                        className="btn btn-danger mx-2" 
                        type="button"
                        onClick={onCloseForm}>Cerrar
                    </button>
                }
            </form>
        </>
    );
};
