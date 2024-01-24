import { useState } from "react";
import {useDispatch} from "react-redux";
import authService from "./appwrite/auth";
import { useEffect } from "react";
import {login,logout} from "./redux/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Outlet} from "react-router-dom";
function App() {
  
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {

    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout());
      }
    })
    .finally(()=>setLoading(false));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return !loading ? (
  <div className="min-h-screen flex flex-wrap content-between bg-black text-white">
    <div className='w-full block'>
      <Header/>
        <main>
         <Outlet/>
        </main>
      <Footer/>
    </div>
  </div>
  ):(null)
}

export default App
