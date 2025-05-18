
const Login = () => {
    return(

    <div class= "bg-blue-200">
        <div>
            <h2>Sign In to you Foods Lab</h2>
        </div>
        <div>
            <form class="flex flex-col gap-3 w-64 ">
                <h1>Username/Email</h1>
                <input
                Type = "email"
                placeholder="Email"
                />
                <h1>Password</h1>
                <input 
                Type = "password"
                placeholder="Password"
                />
                <button class = "bg-gray-100" 
                Type = "Submit"
                />
            </form>
        </div>
    </div>
    );
}

export default Login; 