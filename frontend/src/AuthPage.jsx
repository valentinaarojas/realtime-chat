// AuthPage component which accepts props as an argument
const AuthPage = (props) => {
    // onSubmit function is triggered when the form is submitted...
    const onSubmit = (e) => {
        e.preventDefault();  // Stops page from reloading when form is submitted
        const { value } = e.target[0];  // Extracts value of first input field in the form
        props.onAuth({ username: value, secret: value });  // Calls onAuth function passed via props with username and secret
    };

    return (
        <div className="background">
            {/* Sets up an HTML form that takes a user's username as
                input and includes a button to submit the form */}
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>  {/* Title of the form */}
                <div className="form-subtitle">Set a username to get started</div>  {/* Subtitle with instructions */}
                <div className="auth">
                    <div className="auth-label">Username</div>  {/* Label for username input */}
                    <input className="auth-input" name="username" />  {/* Input field for username */}
                    <button className="auth-button" type="submit">  {/* Submit button */}
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;
