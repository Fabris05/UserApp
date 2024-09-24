import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
    {
        id: 1,
        username: 'Pepe',
        password: '12345',
        email: 'pepe@gmail.com'
    }
];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}

export const useUsers = () => {
    
    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const [userSelected, setUserSelected] = useState(initialUserForm);

    const handlerAddUser = (user) => {
        // console.log(user);

        let type;

        if(user.id === 0){
            type = 'addUser';
        }else{
            type = 'updateUser';
        }

        dispatch({
            type, // type : type
            payload: user,
        });

        Swal.fire({
            title:  (user.id === 0) ? 
                "Usuario creado" : 
                "Usuario actualizado",
            text: (user.id === 0) ? 
                "El usuario ha sido creado con éxito!" : 
                "El usuario ha sido actualizado con éxito!",
            icon: "success"
        });
    }

    const handlerRemoveUser = (id) => {

        Swal.fire({
            title: "¿Estás seguro?",
            text: "Cuidado, no podrás revertir este cambio...",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, elimínalo"
          }).then((result) => {
            if (result.isConfirmed) {

                console.log(id);
                dispatch({
                    type: 'removeUser',
                    payload: id
                });  

              Swal.fire({
                title: "Usuario eliminado",
                text: "El usuario ha sido eliminado con éxito",
                icon: "success"
              });
            }
          });
    }

    const handlerUserSelectedForm = (user) => {
        // console.log(user);
        setUserSelected({...user}); // Pasamos un clon del arreglo usuario
    }
    

    return{
        users,
        userSelected,
        initialUserForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm
    }
}