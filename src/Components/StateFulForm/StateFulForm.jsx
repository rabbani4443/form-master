import { useState } from "react";

const StateFulForm = () => {
    const [name, setName]= useState(null);
    const [email, setEmail] = useState(null)
    const [password, setPassword] =useState(null);
    const [error, setError] = useState()

    const handleSubmit = e =>{
        e.preventDefault()
        if (password.length < 6) {
            setError('Password must be 6 character or longer')
        }else{
            setError('')
        }
        console.log(name,email,password)
    }

    const handleNameChange = e =>{
        // console.log(e.target.value);
        setName(e.target.value)
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange=e=>{
        setPassword(e.target.value)
    }

    return (
        <div>
            <h1 className='text-4xl font-bold pb-5' > Stateful Form  React </h1>
                 <form onSubmit={handleSubmit} className="w-full">

                <input 
                onChange={handleNameChange} 
                type="text" name="name" className="px-6 py-2 rounded-lg mb-3 w-2/4" />
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name="email" className="px-6 py-2 rounded-lg mb-3 w-2/4" />
                <br />
                <input 
                onChange={handlePasswordChange}
                type="password" name="password" className="px-6 py-2 rounded-lg mb-3 w-2/4" required />
                <br />
                <input type="submit" value="Submit" className="px-6 py-2 rounded-lg border"/>
                {
                    error && <p className="text-red-600 text-lg"> {error} </p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;