
export const SignUpPage = () => {
    return  (
        <>
            <h2 className="auth-title">
                Note Add
            </h2>
            <div className="input-box">
                <form>
                    <input type="email" value=""  placeholder="Enter Email"/>
                    <input type="text" value=""  placeholder="Enter Username"/>
                    <input type="password" value=""  placeholder="Enter Password"/>
                    <input type="text" value=""  placeholder="Repeat Password"/>
                    <button>
                        Sign Up
                    </button>
                </form>
            </div>
           
    </>
    )
}