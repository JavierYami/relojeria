import Input from "../components/Input";

const Login = () => {

    return (

        <div className="flex h-screen">

            <div className="w-1/2 p-5 flex jutify-center">
                <h1>Relojería nombre  / Logo</h1>
            </div>

            <div className="w-1/2 shadow-xl rounded-md flex justify-center items-center">
                <div className="space-y-5 w-5/6">
                    <Input text={"Email"}></Input>
                    <Input text={"Nombre(s)"}></Input>
                    <Input text={"Apellido"}></Input>
                    <Input text={"Contraseña"}></Input>
                </div>

            </div>
            
        </div>

    )
   
}

export default Login;