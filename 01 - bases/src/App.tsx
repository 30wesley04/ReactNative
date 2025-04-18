// import { BasicFunctions } from './typescript/BasicFunctions'
// import { BasicTypes } from './typescript/BasicTypes'
// import { ObjectLiteral } from './typescript/ObjectLiteral'
// import { Counter } from "./components/Counter"
// import { LoginPage } from "./components/LoginPage"
// import { UsersPage } from "./components/UsersPage"
import { FormsPage } from "./components/FormsPage"
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className='text-4xl mb-5'>React + TS</h1>

        {/* <BasicTypes/> */}
        {/* <ObjectLiteral /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UsersPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  )
}

export default App
