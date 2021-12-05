import { useContext } from "react";
import { UserContext } from "../App";
import Redirect from "../components/Redirect";

export default function AuthGaurd({children}){

    let {user} = useContext(UserContext);

    if(user === undefined){
        return <h1>Loading....</h1>;
    } else if(user === null){
        return <Redirect to="/login"/>
    } else {
        return children;
    }

}