

const ReusableForm = ({formTitle,handleSubmit, children}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data ={
            name:e.target.name.value,
            email:e.target.email.value,
            phone:e.target.name.phone,
            password:e.target.name.password
        }
        handleSubmit(data)
    }

    return (
        <div>
            <h1 className='text-3xl font-bold pt-5' >  {formTitle} </h1>
            {children}
            <form onSubmit={handleLocalSubmit} className="w-full">
                <input type="text" name="name" className="px-6 py-2 rounded-lg mb-3 w-2/4" />
                <br />
                <input type="email" name="email" className="px-6 py-2 rounded-lg mb-3 w-2/4" />
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

export default ReusableForm;