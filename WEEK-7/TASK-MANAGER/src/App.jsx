
import './App.css';
// import './components/test1.jsx';
// import Test1 from './components/test1.jsx';
// import './components/Test2.jsx'
// import StateDemo from "./components/StateDemo.jsx"
// import FormDemo from './components/FormDemo.jsx';
// import RegistrationForm from './components/RegistrationDemo.jsx';
// import RegistrationDemo from './components/RegistrationDemo.jsx';
import TaskManager from './components/TaskManager.jsx';



//JSX - JavaScript Syntax Extention

function App()//fucntion name should be file name 
 { 
  //2. return a react element
  
  return(
    <div className='text-center border-2 p-24 bg-gray-200'>
      {/* <h1 className='text-5xl text-blue-400'>State Demo</h1> */}
      {/* <StateDemo/> */}
      {/* <h1 className='text-5xl text-blue-400'>Form Demo</h1> */}
      {/* <FormDemo/> */}
      {/* <h1 className='text-5xl text-blue-400'>User Registration Form</h1> */}
      {/* <RegistrationDemo/> */}
       <h1 className='text-5xl text-blue-400'>Task Manager</h1>
      <TaskManager/> 
    </div>
  )
}


export default App;
