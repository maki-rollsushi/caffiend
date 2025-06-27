import { use, useState } from "react"
import { useAuth } from "../context/AuthContext"


export default function Authentication()  {
    const [isReg, setIsReg] = useState(false)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [isAuth, setIsAuth] = useState(false)
    const [error, setError] = useState(null)
    const {signup, login} = useAuth()
    async function handleAuth() {
        if(!email || !email.includes('@' || !password || !password.length < 6 || isAuth)) {return}
        try{
            setIsAuth(true)
            setError(null)
            
            if(isReg){
                await signup(email, pass)
            }else{
                await login(email, pass)
            }
            
        }catch(err){
            console.log(err.message)
            setError(err.message)
        }finally{
            setIsAuth(false)
        }
    }

    return (
        <>
            <h2 className="sign-up-text">{isReg ? 'Sign Up' : 'Log In'}</h2>
            <p>{isReg ? 'Create an account!':'Sign in to your account'}</p>
            <input value = {email} onChange={(e) => {
                setEmail(e.target.value)
            }}placeholder="Email"/>
            <input type='password' value = {pass} onChange={(e) => {
                setPass(e.target.value)
            }}placeholder="***********"/>
            <button onClick={handleAuth}><p>{isAuth ? 'Authenticating...' : 'Submit'}</p></button>
            <hr />
            <div className = 'register-content'>
                <p>{isReg ? 'Already have an Account?': 'Don\'t have an account?' }</p>
                <button onClick={() => {setIsReg(!isReg)}}>
                    <p>{isReg ? 'Sign in' : 'Sign Up'}</p>
                </button>
            </div>
        </>
    )
}