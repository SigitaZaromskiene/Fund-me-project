import SmallBtn from "../Components/SmallBtn";

const loginHandler = () => {};

function Login() {
  return (
    <div className="login-form-container wrapper">
      <form className="login-form" onSubmit={loginHandler}>
        <div>
          <label>Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="number"></input>
        </div>
        <SmallBtn type="submit" text="Login"></SmallBtn>
      </form>
    </div>
  );
}

export default Login;
