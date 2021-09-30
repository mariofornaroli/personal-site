import React from "react";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console("Message submited: " + JSON.stringify(data));
  };

  return (
    <>
      <section id="contact" className="section contact-section after-left-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
              <div className="contct-form">
                <div className="sm-title">
                  <Fade left>
                    <h4 className="font-alt">Contact me</h4>
                  </Fade>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <Fade bottom>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full name"
                            {...register("name", { required: true })}
                          />
                          <label className="form-label">Name</label>
                          {errors.name && errors.name.type === "required" && (
                            <span className="invalid-feedback">Name is required</span>
                          )}
                        </div>
                      </Fade>
                    </div>
                    {/* End .col-6 */}

                    <div className="col-md-6">
                      <Fade bottom>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email address"
                            {...register(
                              "email",
                              {
                                required: "Email is Required",
                                pattern: {
                                  value: /\S+@\S+\.\S+/,
                                  message: "Entered value does not match email format",
                                },
                              },
                              { required: true }
                            )}
                          />
                          <label className="form-label">Email</label>
                          {errors.email && (
                            <span className="invalid-feedback">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </Fade>
                    </div>
                    {/* End .col-6 */}

                    <div className="col-12">
                      <Fade bottom>
                        <div className="form-group">
                          <textarea
                            rows="4"
                            className="form-control"
                            placeholder="Type comment"
                            {...register("comment", { required: true })}
                          ></textarea>
                          <label className="form-label">Message</label>
                          {errors.comment && (
                            <span className="invalid-feedback">Comment is required.</span>
                          )}
                        </div>
                      </Fade>
                    </div>
                    {/* End .col-12 */}

                    <div className="col-12">
                      <Fade bottom>
                        <div className="btn-bar">
                          <button className="px-btn px-btn-theme">
                            Send your message
                          </button>
                        </div>
                      </Fade>
                    </div>
                    {/* End .col-12 */}
                  </div>
                </form>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <Fade bottom>
                  <div className="sm-title">
                    <h4 className="font-alt">Get in touch</h4>
                    <p>
                      Always available for freelancing if the right project
                      comes along, Feel free to contact me.
                    </p>
                  </div>
                </Fade>

                <Fade bottom>
                  <div className="media hc">
                    <div className="icon">
                      <i className="ti-map"></i>
                    </div>
                    <span className="media-body">
                      {/* Via Toso Montanari 22 , <br /> */}
                      Bologne, Italy <br />
                      40138, Italy.
                    </span>
                  </div>
                  {/* End media */}
                </Fade>
                <Fade bottom>
                  <div className="media hc">
                    <div className="icon">
                      <i className="ti-email"></i>
                    </div>
                    <span className="media-body">
                      mario.fornaroli@yahoo.it
                    </span>
                  </div>
                  {/* End media */}
                </Fade>
                <Fade bottom>
                  <div className="media hc">
                    <div className="icon">
                      <i className="ti-mobile"></i>
                    </div>
                    <span className="media-body">
                      +039 334 7385621
                    </span>
                  </div>
                  {/* End media */}
                </Fade>
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
