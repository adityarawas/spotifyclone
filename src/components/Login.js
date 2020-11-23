import "./Login.css"
import {loginUri} from './soptify';
function Login() {
    return (
        <div className="login">
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />
        <a href={loginUri}>Login with spotify</a>
        </div>
    )
}

export default Login


