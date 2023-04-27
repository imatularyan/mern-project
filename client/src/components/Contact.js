import "bootstrap/dist/css/bootstrap.css";

const Contact = () => {
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 w-100">
        <div className="row align-items-center g-lg-5 py-5 w-100 mx-auto">
          <div className="col-md-10 mx-auto col-lg-5 w-25 border shadow-sm">
            <div className="">Phone</div>
            <img src="" alt="phone" />
            <div className="">+91 0129876543</div>
          </div>
          <div className="col-md-10 mx-auto col-lg-5 w-25 border shadow-sm">
            <div className="">Email</div>
            <img src="" alt="email" />
            <div className="">abc@mail.com</div>
          </div>
          <div className="col-md-10 mx-auto col-lg-5 w-25 border shadow-sm">
            <div className="">Address</div>
            <img src="" alt="phone" />
            <div className="">Pune, MH, India</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
