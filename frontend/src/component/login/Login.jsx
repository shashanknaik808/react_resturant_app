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
        <div className='pri'>
            <div className='wrapper'>
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>

                    <div className='container'>
                        <label htmlFor="username"> <b>Username </b></label>
                        <input type="text" name='username' id='username' required />

                        <label htmlFor="password"> <b>Password</b></label>
                        <input type="password" name='password' id='password' required />

                        <button type='submit'>Login</button>
                    </div>

                </form>

            </div>
    
        </div >
    )
}

export default Login;