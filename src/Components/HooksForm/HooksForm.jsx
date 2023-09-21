import useInputState from "../../Hooks/useInputState";

const HooksForm = () => {

    // const [name, handleChange]= useInputState('Sojoni')

    const emailState = useInputState('')


    const handleSubmit = e =>{
        e.preventDefault();
        // console.log( name)
        console.log('Form Data : ', emailState.value)
    }

    return (
        <div>
             <h1 className='text-4xl font-bold pb-5' > Hooks Form</h1>
            <form onSubmit={handleSubmit} className="w-full">
                {/* <input type="text" value={name} onChange={handleChange}  name="name" className="px-6 py-2 rounded-lg mb-3 w-2/4" />
                <br /> */}
                <input type="email" {...emailState} name="email" className="px-6 py-2 rounded-lg mb-3 w-2/4" />
                <br />
                <input type="number" name="phone" className="px-6 py-2 rounded-lg mb-3 w-2/4" />
                <br />
                <input type="password" name="password" className="px-6 py-2 rounded-lg mb-3 w-2/4" />
                <br />
                <input type="submit" value="Submit" className="px-6 py-2 rounded-lg border"/>
            </form>
        </div>
    );
};

export default HooksForm;