const Signup = () => {
  return (
    <>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-md-10 mx-auto col-lg-5 w-100">
            <form
              action="/register"
              method="POST"
              class="p-5 p-md-5 border rounded-3 bg-body-tertiary container shadow"
            >
              <div class="row">
                <div class="form-check mb-3 w-50">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="First name"
                    value=""
                    name="firstname"
                  />
                </div>
                <div class="form-check mb-3 w-50">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Last name"
                    value=""
                    name="lastname"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-check mb-3 w-50">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value=""
                    name="email"
                  />
                </div>
                <div class="form-check mb-3 d-flex gap-3 w-50">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="flexRadioDefault2"
                    />
                    Female
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-check mb-3 w-50">
                  <input
                    type="phone"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Phone"
                    value=""
                    name="phone"
                  />
                </div>
                <div class="form-check mb-3 w-50">
                  <input
                    type="phone"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Age"
                    value=""
                    name="age"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-check mb-3 w-50">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                  />
                </div>

                <div class="form-check mb-3 w-50">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Confirm Password"
                    value=""
                    name="confirmpassword"
                  />
                </div>
              </div>

              <div class="checkbox mb-3 w-50">
                <label>
                  <input type="checkbox" value="remember-me" />
                  Remember me
                </label>
              </div>
              <button
                class="w-100 btn btn-lg btn-primary"
                type="submit"
                value="register"
              >
                Register
              </button>
              <hr class="my-4" />
              <small class="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
