import { useAuth } from "../hooks/useAuth"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}) =>{

    const {login, handerLogin, handlerLogout} = useAuth();

    return(
        <AuthContext.Provider value={
            {
                login, 
                handerLogin,
                handlerLogout
            }
        }>
            {/* Cualquier hijo que esté dentro de las etiquetas.
                  accederá a la información */}
                  
            {children}
        </AuthContext.Provider>
    )
}