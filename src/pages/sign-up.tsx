import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Navigate, useNavigate } from "react-router-dom";

import { singUp } from "../features/slices/actions/sing-up.action";
import { AppDispatch } from "../features/types";
import { clearMessage } from "../features/slices/message";
import { validationSchema } from '../component/validator';
import { UserInfo } from "../features/types";


const SignUpPage: React.FunctionComponent = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
 
  const [successful, setSuccessful] = useState(false);

  const [messageBody , setMessageBody] = useState("");
  const { message } = useSelector((state: any) => state.message);
  const { isLoggedIn } = useSelector((state:any) => state.auth);
  console.log( message)

  


  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues:UserInfo = {
    username: "",
    email: "",
    password: "",
  };



const handleRegister = (formValue:UserInfo) => {

    const { username, email, password } = formValue;
    setSuccessful(false);

    dispatch(singUp({username, email, password}))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
     
      if (message === "User Created Successfully") {
        const refresh = ()  => window.location.reload();
        setMessageBody("User Created Successfully")
        navigate("/login")
        setTimeout(refresh, 3000)
       
      }else if (message === "Request failed with status code 400"){
        const removeMassage = ()  => setMessageBody("")
        setMessageBody("A User with this Information exists already! Please try again?")
        setTimeout(removeMassage, 3000)
        formValue.email = ""
        formValue.username = ""
        formValue.password = ""
      };
    }
    if (isLoggedIn) {
      return <Navigate to="/login" />;
    } 
  

  return (
    <div className="col-md-12 signup-form">
      <div className="card card-container">
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>

      {messageBody && (
        <div className="form-group">
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
            {messageBody}
          </div>
        </div>
      )}
    </div>
  );
};

 
export default SignUpPage;

