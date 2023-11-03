import './Login.css';

function Login(props) {

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);
        console.log(event.target.username);
        console.log(event.target.username.value);
        console.log(event.target.password);
        console.log(event.target.password.value);
    }

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                Username: <input type='text' name='username' id='username' /><br />
                Password: <input type='password' name='password' id='password' />
                <input type='submit' value='Login' />
            </form>
        </div>
    )
}

export default Login;