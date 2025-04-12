import { RiAccountCircleLine, RiAdminLine, RiLockLine, RiMailLine, RiUser3Line } from '@remixicon/react'
import React, {useState} from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');
  const [isValid, setIsValid] = useState(false)

  const navigate = useNavigate();

  const checkfield = () => {
    if(email === ''){setIsValid(false)} else{setIsValid(true)}
    if(password === ''){setIsValid(false)} else{setIsValid(true)}
  }

  const handleLogin = (e) => {
    checkfield();
    e.preventDefault();

    const activeUser = {
      email, password
    };
    loginUser(activeUser);
  }

  const loginUser = async (activeUser) => {
    try {
      const res = await fetch(`http://localhost:4000/activeUsers`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(activeUser),
      });

      if (res){
        alert('Login successfull');
        return navigate(`/home`);
      }

    } catch (error) {
      console.log('Error While Trying to Login', error)
    }
    finally{
      setIsValid(false)
      getEmail('')
      getPassword('')
    }
  }


  return (
    <main className='bg-accent/35 p-3 h-screen items-center' >
      <form className="login-form !h-[95%]" onSubmit={handleLogin}>
      <div className="text-2xl font-normal tracking-wider mb-11 flex flex-col items-center gap-1">
            <div className="flex justify-between gap-3">
            <RiAccountCircleLine className='text-accent'/>
            <span className='capitalize'>Login</span>
            </div>
            <div className="border-t-[3px] border-orange-400 w-[7rem]"></div>
        </div>

        <div className="w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-3">
            <div className="input-div">
                <label htmlFor="name" className='label'>
                  <RiMailLine size={15}/>
                  <span>Email*</span>                 
                </label>
                <input type="text" id='name' name='name' placeholder='Email or Phone' className='input-field' value={email} onChange={(e) => getEmail (e.target.value)} onKeyUp={checkfield}/>
            </div>
        </div>

        <div className="w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-3">
            <div className="input-div">
                <label htmlFor="name" className='label'>
                  <RiLockLine size={15}/>
                  <span>Password</span>
                </label>
                <input type="text" id='name' name='name' placeholder='Enter Password' className='input-field' value={password} onChange={(e) => getPassword (e.target.value)} onKeyUp={checkfield}/>
            </div>
        </div>

        <div className="w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-3 flex justify-between ">
          <div className="">
          <input type="checkbox" id='agree'/>
          <label htmlFor="agree">Remember me</label>
          
          </div>                
          <NavLink to={`/register`} className={'text-accent'}>Forgotten Password?</NavLink>
        </div>
        

        <div className="flex justify-between w-full px-3 sm:px-3 md:px-8 gap-4 lg:px-8 mb-3">
              <button className={`btn-create !w-fit ${!isValid ? 'disabled:opacity-60 disabled:cursor-not-allowed' :''}`} disabled={!isValid} onMouseOver={checkfield}>Login</button>
        
              <NavLink to={`/register`} className={`btn-register !w-fit`}>create new account</NavLink>
        </div>               
      </form>
    </main >
  )
}

export default Login
