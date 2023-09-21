
import './App.css'
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HooksForm from './Components/HooksForm/HooksForm'
// import RefForm from './Components/RefForm/RefForm'
// import StateFulForm from './Components/StateFulForm/StateFulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  const handleSubmitSingUp = data =>{
    // e.preventDefault();
    console.log('Sing Up', data)
}

  const handleSubmitProfile = data =>{
    // e.preventDefault();
    console.log('Profile', data)
}


  return (
    <>
      
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HooksForm></HooksForm> */}
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSubmitSingUp}>
      <h1 className='text-xl font-bold py-5' >  Sing Up children Text </h1>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleSubmitProfile} >
      <h1 className='text-xl font-bold py-5' >  Profile children Text </h1>
      </ReusableForm>
    </>
  )
}

export default App
