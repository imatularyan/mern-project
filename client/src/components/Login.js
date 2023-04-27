const Login = () => {
  return (
    <>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-md-10 mx-auto col-lg-5 w-50">
            <form
              action="/login"
              method="POST"
              class=" w-100 d-flex flex-column gap-3 shadow bg-body-tertiary rounded-3 p-4 "
            >
              <h1 class="h3 mb-4 fw-normal">Please sign in</h1>
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
              <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
