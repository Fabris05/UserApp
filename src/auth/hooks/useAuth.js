import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";

const initalLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

export const useAuth = () => {
    
    const [login, dispatch] = useReducer(loginReducer, initalLogin);
    
    const handerLogin = ({username, password}) => {
        
        // Validamos el login
        const isLogin = loginUser({username, password});

        if(isLogin){
            const user = { username: 'admin'}

            dispatch({
                type: 'login',
                payload: user,
            });

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user: user // o tambien solo user
            }));

        }else{
            Swal.fire({
                title: 'Error de credenciales',
                text: 'Usuario o contraseña incorrectos',
                icon: 'error'
            });
        }
    }

    const handlerLogout = () => {

        dispatch({
            type: 'logout',
        });

        sessionStorage.removeItem('login');
    }

    return {
        login,
        handerLogin,
        handlerLogout
    }
}