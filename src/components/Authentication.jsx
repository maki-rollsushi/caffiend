import { use, useState } from "react"


export default function Authentication()  {
    const [isReg, setIsReg] = useState(false)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [authenticating, setAuthenticating] = useState(false)


    async function handleAuth() {
        console.log(5)
    }

    return (
        <>
            <h2 className="sign-up-text">{isReg ? 'Sign Up' : 'Log In'}</h2>
            <p>{isReg ? 'Create an account!':'Sign in to your account'}</p>
            <input value = {email} onChange={(e) => {
                setEmail(e.target.value)
            }}placeholder="Email"/>
            <input value = {pass} onChange={(e) => {
                setPass(e.target.value)
            }}placeholder="***********"/>
            <button onClick={handleAuth}><p>Submit</p></button>
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