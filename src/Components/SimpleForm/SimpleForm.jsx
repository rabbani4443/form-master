
const SimpleForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        // console.log('form submit')
        // console.log(e);
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value)
        console.log(e.target.phone.value)

    };

    return (
        <div>
            <h1 className='text-4xl font-bold pb-5' > Simple Form React </h1>
            <form onSubmit={handleSubmit} className="w-full">
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

export default SimpleForm;