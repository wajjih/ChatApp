import { useContext } from "react";
import RegisterAndLoginForm from "./RegisterAndLoginForm.jsx";
import { UserContext } from "./UserContext.jsx";

export default function Routes(){
    const {username, id} = useContext(UserContext)

    if(username) {
        return 'logged in! '+ username
    }

    return(
        <RegisterAndLoginForm/>
    )
}