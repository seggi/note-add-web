import { Link } from "react-router-dom";
import "./index.css";

export const Login =  () => {
    return (
        <>
            <div className="auth-content">
                <h2 className="auth-title">
                    Note Add
                </h2>
                <div className="input-box">
                    <form>
                        <input type="text" value=""  placeholder="Enter Email"/>
                        <input type="text" value=""  placeholder="Enter Password"/>
                        <button>
                            Login
                        </button>
                    </form>
                </div>
                <a  href="#">
                    You don't have account? click here
                </a>
            </div>
        </>
    )
}