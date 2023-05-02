const Home = () => {
  return (
    <>
      <div
        className="row position-relative"
        style={{ height: "100vh", letterSpacing: "3px" }}
      >
        <div className="bg-dark w-50 h-100"></div>
        <span
          className=" position-absolute text-white text-center"
          style={{ top: "50%" }}
        >
          <p className="fs-5">WELCOME</p>
          <h1>We Are The MERN Developer</h1>
        </span>
        <div className=" bg-secondary w-50 h-100"></div>
      </div>
    </>
  );
};

export default Home;
