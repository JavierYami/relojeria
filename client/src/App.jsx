import SignUp from "./views/SignUp";
import { Route, Routes } from "react-router-dom";

function App () {

    return (
        <div className="bg-gray-200 h-screen flex justify-center items-center p-10">
            <Routes>
                <Route path="/SignUp" Component={SignUp}/>
            </Routes>
        </div>
    )

}

export default App;