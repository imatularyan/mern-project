import React, { useState } from "react";
import signupimg from "../assets/image/signup.svg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = res.json();
    if (res.status === 422 || !data) {
      window.alert("Registration failed!");
    } else {
      window.alert("Registration successful");

      navigate("/login");
    }
  };

  return (
    <>
      <div className="container px-4 py-5">
        <div className="px-5 container">
          <div className="w-75 mx-auto shadow p-3 bg-body-tertiary rounded-3 border row">
            <form method="POST" className="container w-50">
              <h2 className=" text-center mb-4">Sign Up</h2>
              <div className="form-check mb-3">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Name"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                />
              </div>
              <div className="form-check mb-3 ">
                <input
                  type="email"
                  className="form-control p-3"
                  placeholder="
                    Email"
                  name="email"
                  autoComplete="on"
                  value={user.email}
                  onChange={handleInputs}
                />
              </div>
              <div className="form-check mb-3 ">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Work"
                  name="work"
                  autoComplete="on"
                  value={user.work}
                  onChange={handleInputs}
                />
              </div>
              <div className="form-check mb-3 ">
                <input
                  type="phone"
                  className="form-control p-3"
                  placeholder="Phone"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                />
              </div>
              <div className="form-check mb-3 ">
                <input
                  type="password"
                  className="form-control p-3"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                />
              </div>

              <div className="form-check mb-3 ">
                <input
                  type="password"
                  className="form-control p-3"
                  placeholder="Confirm Password"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                />
              </div>
              <div className="form-check mb-3 ">
                <button
                  className=" btn btn-lg btn-primary w-100"
                  type="submit"
                  onClick={PostData}
                >
                  Signup
                </button>
              </div>
              <hr className="my-4" />
              <small className="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
            <div className="w-50 mh-100 d-flex justify-content-center align-items-center">
              <img className=" w-75" src={signupimg} alt="signup" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
