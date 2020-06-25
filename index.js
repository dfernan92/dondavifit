import React from "react"
import Fitsil from "./src/images/assets/ipad.png" // Tell webpack this JS file uses this image
import Fing from "src/images/assets/img/fingerprintfit.png" // Tell webpack this JS file uses this image
import logo from "./logo.png" // Tell webpack this JS file uses this image
import logo from "./logo.png" // Tell webpack this JS file uses this image

var NewComponent = React.createClass({
  render: function () {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content />
        <meta name="author" content />
        <title>DondaviFitness</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        {/* Font Awesome icons (free version)*/}
        {/* Google fonts*/}
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href="css/styles.css" rel="stylesheet" />
        {/* Navigation*/}
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" />
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#projects">
                    Plans
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#signup">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Masthead*/}
        <header className="masthead">
          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
              <h1 className="mx-auto my-0 text-uppercase">Dondavi Fitness</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5"></h2>
              <a className="btn btn-primary js-scroll-trigger" href="#about">
                Get Started
              </a>
            </div>
          </div>
        </header>
        {/* About*/}
        <section className="about-section text-center" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-white mb-4">Welcome</h2>
                <p className="text-white-50">
                  Dondavi Fitness was started on the core principle that success
                  in life comes with building great paradigms. No one is fit
                  because of their workout plan or diet or genetics alone, they
                  are fit because they develop a series of effective habits that
                  produce results.{" "}
                </p>
              </div>
            </div>
            <img className="img-fluid" src={Fitsil} alt="" />
          </div>
        </section>
        {/* Projects*/}
        <section className="projects-section bg-light" id="projects">
          <div className="container">
            {/* Featured Project Row*/}
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <div className="col-xl-8 col-lg-7">
                <img
                  className="img-fluid mb-3 mb-lg-0"
                  src={Fing}
                  alt=""
                  width={700}
                  height={750}
                />
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="featured-text text-center text-lg-left">
                  <h4>Fingerprint Fitness</h4>
                  <p className="text-black-50 mb-0">
                    Our training programs are uniquely tailored to our
                    individual clients strengths and weaknesses to align with
                    the most efficient means of reaching desired outcomes. Using
                    advanced data analysis techniques we are able to provide
                    data driven strategies for weight loss, muscle gain,
                    improved strength, speed and overall athletic performance as
                    well as advanced nutrition tracking techniques. At Dondavi
                    Fitness, we believe your training plan should be as unique
                    as your fingerprint is; although many seem similar, no two
                    are the same.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* Project One Row*/}
            <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="assets/img/weights.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <h4 className="text-white">Workout Plans</h4>
                      <p className="mb-0 text-white-50">
                        We design custom workout plans that align with your
                        goals and lifestyle to produce results. Whether you are
                        trying to build muscle, lose weight, or improve sport
                        specific function we have the expertise to design a
                        program that not only works without compromising
                        longevity or enjoyment.
                      </p>
                      <hr className="d-none d-lg-block mb-0 ml-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project Two Row*/}
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="assets/img/training.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-right">
                      <h4 className="text-white">Personal Training</h4>
                      <p className="mb-0 text-white-50">
                        At Dondavi Fitness we strongly believe in autonomy when
                        it comes to your journey but that doesn't mean you can't
                        benefit from help. Our trainers are certified and
                        accredited to help you achieve your goals whether you
                        are a beginner who needs some guidance or a seasoned
                        athlete looking to take it to the next level.{" "}
                      </p>
                      <hr className="d-none d-lg-block mb-0 mr-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Signup*/}
        <section className="signup-section" id="signup">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 mx-auto text-center">
                <i className="far fa-paper-plane fa-2x mb-2 text-white" />
                <h2 className="text-white mb-5">
                  Subscribe to the Newsletter!
                </h2>
                <form className="form-inline d-flex">
                  <input
                    className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                    id="inputEmail"
                    type="email"
                    placeholder="Enter email address..."
                  />
                  <button className="btn btn-primary mx-auto" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Contact*/}
        <section className="contact-section bg-black">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-map-marked-alt text-primary mb-2" />
                    <h4 className="text-uppercase m-0">Address</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">
                      8422 International Dr, Orlando FL
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-envelope text-primary mb-2" />
                    <h4 className="text-uppercase m-0">Email</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">
                      <a href="#!">dondavifit@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-mobile-alt text-primary mb-2" />
                    <h4 className="text-uppercase m-0">Phone</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">+1 (407) 364-7575</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="social d-flex justify-content-center">
              <a className="mx-2" href="#!">
                <i className="fab fa-twitter" />
              </a>
              <a className="mx-2" href="#!">
                <i className="fab fa-instagram" />
              </a>
              <a className="mx-2" href="#!">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </section>
        {/* Footer*/}
        <footer className="footer bg-black small text-center text-white-50">
          <div className="container">Copyright © Dondavi Fitness 2020</div>
        </footer>
        {/* Bootstrap core JS*/}
        {/* Third party plugin JS*/}
        {/* Core theme JS*/}
      </div>
    )
  },
})
