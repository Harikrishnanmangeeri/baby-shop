import React from 'react';

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>Here you can use rows and columns to organize your footer content.</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Company</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">About Us</a>
            </li>
            <li>
              <a href="#!">Contact Us</a>
            </li>
            <li>
              <a href="#!">Privacy Policy</a>
            </li>
            <li>
              <a href="#!">Terms and Conditions</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Categories</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Clothing</a>
            </li>
            <li>
              <a href="#!">Toys</a>
            </li>
            <li>
              <a href="#!">Feeding</a>
            </li>
            <li>
              <a href="#!">Diapers</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <hr className="mt-4" />

    {/* <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#" className="btn-floating btn-fb mx-1">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="btn-floating btn-tw mx-1">
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="btn-floating btn-ins mx-1">
                <i className="fab fa-instagram"> </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div> */}

    <hr className="my-4" />

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Your Baby Shop. All rights reserved.
          </p>
          <p className="mb-0">Made with ❤️ by Baby Shower</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
