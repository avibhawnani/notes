import {useDispatch} from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../redux/authSlice";

const LogoutBtn = () => {

    const dispatch = useDispatch();

    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-300 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
      )
}

export default LogoutBtn