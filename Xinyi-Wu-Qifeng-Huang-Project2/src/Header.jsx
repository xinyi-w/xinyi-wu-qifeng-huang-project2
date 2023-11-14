import { NavLink } from "react-router-dom";


export default function Header(){
    return(<div>
            <NavLink to='/'>Home</NavLink>&nbsp;
            <NavLink to='/game'>Game</NavLink>&nbsp;
            <NavLink to='/rules'>Rules</NavLink>
        </div>
        )
}