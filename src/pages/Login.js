import { useState } from "react"
import { client } from '../supabase/client';

function Login() {
    const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await client.auth.signInWithOtp({
                email: email
              });

            console.log(data);
        } catch (error) {
            console.log(error);
            const {msg} = error;
            alert(msg);
        }
    }
  
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                value={email}
                type="email" 
                name="email" 
                placeholder="email@email.com"
                onChange={(e) => setEmail(e.target.value)}
            />
            {/* <input 
                value={password}
                type="password" 
                name="password" 
                placeholder="******"
                onChange={(e) => setPassword(e.target.value)}
            /> */}
            <button>send</button>
        </form>
    </div>
  )
}

export default Login