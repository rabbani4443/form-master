import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {
    const nameRef =useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect( ()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value)

    }
    return (
        <div>
             <h1 className='text-4xl font-bold pb-5' > useRef Form React </h1>
            <form onSubmit={handleSubmit} className="w-full">
                <input type="text" name="name" ref={nameRef} className="px-6 py-2 rounded-lg mb-3 w-2/4" />
                <br />
                <input type="email" name="email" ref={emailRef} className="px-6 py-2 rounded-lg mb-3 w-2/4" />
                <br />
                <input type="password" name="password" ref={passwordRef} className="px-6 py-2 rounded-lg mb-3 w-2/4" />
                <br />
                <input type="submit" value="Submit" className="px-6 py-2 rounded-lg border"/>
            </form>
        </div>
    );
};

export default RefForm;