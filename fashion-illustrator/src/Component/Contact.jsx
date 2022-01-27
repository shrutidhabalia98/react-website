import React, { useState } from "react";

let Contact = () => {
  let [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    feedback: ""
  });

  let InputEvent = (event) => {
    let { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  };
  let formSubmit = (e) => {
    e.preventDefault();
    alert(`Your Feedback is Successfully Submited!`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto"></div>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="InputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Enter Your Full Name"
              />
              <div className="mb-3">
                <label for="InputEmail1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label for="InputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter Email"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="textArea" className="form-label">
                Give Us Feedback
              </label>
              <textarea
                rows="3"
                className="form-control"
                name="feedback"
                value={data.feedback}
                onChange={InputEvent}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-outline-primary btn-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
