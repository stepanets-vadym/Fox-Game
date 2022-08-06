// React
import { Formik, FormikHelpers as FormikActions } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import axios from 'axios';

// Components & elements
import ErrorMessage from 'elements/errorMessage/ErrorMessage';
import Loader from 'elements/loader/Loader';
import Label from 'elements/label/Label';

// Styles
import styles from './Registration.module.scss';
import classNames from 'classnames';

// Routers
import { AUTHORIZATION_ROUTE } from 'utils/consts';
// Interfaces
import { Errors } from 'interfaces/Errors.types';
interface FormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
}

const Erorrs = {
  REQIRED: 'this field is required',
};

const Registration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<Errors>({
    fisrtName: '',
    lastName: '',
    message: '',
    showMessage: false,
  });
  
  let auth = useAuth();
  let navigate = useNavigate();
  // Start Value Inputs
  const initialValues: FormValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    username: '',
  };

  // Validate Form
  const validate = (values: FormValues) => {
    const errors: FormErrors = {};
    // Password Validate
    if (!values.password) {
      errors.password = Erorrs.REQIRED;
    } else if (values.password.length <= 5) {
      errors.password = 'Password is too short';
    }
    // Email Validate
    if (!values.email) {
      errors.email = Erorrs.REQIRED;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    // First Name Vlidate
    if (!values.firstName) {
      errors.firstName = Erorrs.REQIRED;
    }
    // Last Name Vlidate
    if (!values.lastName) {
      errors.lastName = Erorrs.REQIRED;
    }
    // Username Vlidate
    if (!values.username) {
      errors.username = Erorrs.REQIRED;
    }
    return errors;
  };

  const submit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikActions<FormValues>
  ) => {
    setLoading(true);
    // const apiUrl = 'http://localhost:8080/api/users/registration';
    const apiUrl = 'https://final-project-bt.herokuapp.com/api/users/registration';
    await axios
      .post(apiUrl, values, {
        headers: {
          'Content-Type': 'application/json',
          mode: 'cors',
        },
      })
      .then((res) => {
        setSubmitting(false);
        resetForm();
        console.log(res);
        localStorage.setItem('token', res.data.token);
        setLoading(false);

        auth.signin(
          {
            authToken: res.data.token,
            id: res.data.id,
            username: res.data.username,
            email: res.data.email,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
          },
          () => navigate(AUTHORIZATION_ROUTE)
        );
      })
      .catch((errors) => {
        setErrorMessage({
          fisrtName: JSON.parse(errors.config.data).firstName,
          lastName: JSON.parse(errors.config.data).lastName,
          message: errors.response.data.message,
          showMessage: true,
        })
        
        setSubmitting(false);
        resetForm();
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      // Registration
      <div className={styles.registration}>
        <div className={styles.wrapper}>
          { errorMessage.showMessage ? <ErrorMessage setErrorMessage={setErrorMessage} error={errorMessage}/> :
          <>
             {/* Logo Block */}
            <div className={styles.logoblock}>
              <div className={styles.icon}>
                <svg
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  className={classNames('icon', styles.fox)}
                  viewBox='0 0 32 32'
                >
                  <path
                    className={styles.chest}
                    fill='#eb6c31'
                    d='M21.506 14.749l-5.526-0.517-5.526 0.517c0 0-3.059 0.904-2.96 5.233l1.283-0.775c0 0-0.987 1.744 0 4.394l1.184-0.775c0 0 0.987 4.2 3.75 7.172l0.395-0.775c0 0 0.493 1.486 1.875 2.778 1.381-1.292 1.875-2.778 1.875-2.778l0.395 0.775c2.763-2.972 3.75-7.172 3.75-7.172l1.184 0.775c0.987-2.649 0-4.394 0-4.394l1.283 0.775c0.099-4.329-2.96-5.233-2.96-5.233z'
                  ></path>
                  <path
                    className={styles.chest}
                    fill='#fce6d4'
                    d='M19.753 17.75l-3.773-0.353-3.773 0.353c0 0-2.088 0.618-2.021 3.573l0.876-0.529c0 0-0.674 1.191 0 3l0.809-0.529c0 0 0.674 2.867 2.56 4.897l0.27-0.529c0 0 0.337 1.015 1.28 1.897 0.943-0.882 1.28-1.897 1.28-1.897l0.269 0.529c1.886-2.029 2.56-4.897 2.56-4.897l0.808 0.529c0.674-1.809 0-3 0-3l0.876 0.529c0.067-2.956-2.021-3.573-2.021-3.573z'
                  ></path>
                  <path
                    fill='#eb6c31'
                    d='M23.645 8.636c0 0 1.854-3.711-2.967-8.127 0 0 0.309 0.895 0 1.721 0 0 0.247-1.042-0.865-2.231 0 0 1.113 2.257-0.433 4.356s-3.338 3.633-3.4 4.281c-0.062-0.648-1.854-2.183-3.4-4.281s-0.433-4.356-0.433-4.356c-1.113 1.189-0.865 2.231-0.865 2.231-0.309-0.826 0-1.721 0-1.721-4.822 4.416-2.967 8.127-2.967 8.127-2.287 3.598-0.247 6.026-0.247 6.026l5.563 4.189c0.282-1.398 2.349-1.189 2.349-1.189s2.067-0.21 2.349 1.189l5.563-4.189c-0 0 2.040-2.428-0.247-6.026z'
                  ></path>
                  <path
                    className={styles.mustache}
                    fill='#fce9db'
                    d='M24.495 16.766c0 0 1.503-1.271 1.792-2.859 0 0-1.214 1.112-1.619 1.271 0 0 1.561-1.97 1.272-3.134 0 0-0.512 1.067-3.064 1.673-2.993 0.711-5.042 2.956-5.492 5.221l-1.404 0.229-1.404-0.229c-0.45-2.265-2.499-4.51-5.492-5.221-2.552-0.606-3.064-1.673-3.064-1.673-0.289 1.165 1.272 3.134 1.272 3.134-0.405-0.159-1.619-1.271-1.619-1.271 0.289 1.588 1.792 2.859 1.792 2.859-1.141-0.338-1.388-0.9-1.388-0.9s-0.083 0.899 1.225 1.788c0.945 0.642 1.82 1.226 5.46 2.108 1.013 0.245 1.944 1.526 3.206 1.542v0.001c0.004 0 0.008-0 0.012-0s0.008 0 0.012 0v-0.001c1.262-0.016 2.193-1.297 3.206-1.542 3.64-0.882 4.516-1.465 5.46-2.108 1.308-0.889 1.224-1.788 1.224-1.788s-0.247 0.562-1.387 0.9z'
                  ></path>
                  <path
                    fill='#fcf3eb'
                    d='M16.826 16.921c-0.446 0.006-0.702 0.213-0.846 0.483-0.144-0.27-0.4-0.477-0.846-0.483-1.318-0.018-1.616 1.463-1.253 2.020s1.388 0.735 1.646 0.583c0.217-0.128 0.361-0.326 0.453-0.495 0.092 0.169 0.236 0.367 0.453 0.495 0.258 0.152 1.284-0.025 1.646-0.583s0.065-2.037-1.253-2.020z'
                  ></path>
                  <path
                    fill='#fcf3eb'
                    d='M17.28 17.67c0.014-0.151 0.023-0.312 0.023-0.485 0-1.529-0.968-3.747-1.323-3.747s-1.323 2.218-1.323 3.747c0 0.173 0.009 0.334 0.023 0.485h2.599z'
                  ></path>
                  <path
                    fill='#332a24'
                    d='M15.981 17.162c-0.921 0-1.349 0.417-1.349 0.417s0.912 1.251 1.349 1.273c0.437-0.022 1.349-1.273 1.349-1.273s-0.428-0.417-1.349-0.417z'
                  ></path>
                  <path
                    fill='#424140'
                    d='M15.981 17.372c0.792 0 1.227 0.156 1.348 0.207l0-0.001c0 0-0.428-0.417-1.349-0.417s-1.349 0.417-1.349 0.417l0.001 0.001c0.121-0.051 0.556-0.207 1.348-0.207z'
                  ></path>
                  <path
                    fill='#fcf3eb'
                    d='M19.895 8.194c0 0 1.4-0.827 3.246 0 0 0 0.987-3.819-1.114-4.965-0.696-0.379-2.737 2.51-2.132 4.965z'
                  ></path>
                  <path
                    fill='#fcf3eb'
                    d='M12.066 8.194c0 0-1.4-0.827-3.246 0 0 0-0.987-3.819 1.114-4.965 0.696-0.379 2.737 2.51 2.132 4.965z'
                  ></path>
                  <path
                    fill='#332a24'
                    d='M20.646 2.741c0.575 0 1.1-0.253 1.501-0.668-0.402-0.507-0.887-1.030-1.469-1.563 0 0 0.309 0.895 0 1.721 0 0 0.247-1.042-0.865-2.231 0 0 0.592 1.203 0.311 2.669 0.168 0.046 0.342 0.072 0.522 0.072z'
                  ></path>
                  <path
                    fill='#332a24'
                    d='M11.315 2.741c0.18 0 0.354-0.025 0.522-0.072-0.281-1.466 0.311-2.669 0.311-2.669-1.113 1.189-0.865 2.231-0.865 2.231-0.309-0.826 0-1.721 0-1.721-0.582 0.533-1.066 1.056-1.469 1.563 0.4 0.416 0.926 0.668 1.501 0.668z'
                  ></path>
                  <path
                    fill='#332a24'
                    d='M17.62 13.887c0 0 0.677-1.73 2.83-1.465 0 0 0.137 1.064-0.642 1.502s-2.188-0.037-2.188-0.037z'
                  ></path>
                  <path
                    fill='#d69a20'
                    d='M19.874 13.197c0 0.316-0.256 0.571-0.571 0.571s-0.571-0.256-0.571-0.571c0-0.316 0.256-0.571 0.571-0.571s0.571 0.256 0.571 0.571z'
                  ></path>
                  <path
                    fill='#fff'
                    d='M19.361 13.019c0 0.127-0.103 0.23-0.23 0.23s-0.23-0.103-0.23-0.23c0-0.127 0.103-0.23 0.23-0.23s0.23 0.103 0.23 0.23z'
                  ></path>
                  <path
                    fill='#332a24'
                    d='M14.341 13.887c0 0-0.677-1.73-2.83-1.465 0 0-0.137 1.064 0.642 1.502s2.188-0.037 2.188-0.037z'
                  ></path>
                  <path
                    fill='#d69a20'
                    d='M13.23 13.197c0 0.316-0.256 0.571-0.571 0.571s-0.571-0.256-0.571-0.571c0-0.316 0.256-0.571 0.571-0.571s0.571 0.256 0.571 0.571z'
                  ></path>
                  <path
                    fill='#fff'
                    d='M13.060 13.019c0 0.127-0.103 0.23-0.23 0.23s-0.23-0.103-0.23-0.23c0-0.127 0.103-0.23 0.23-0.23s0.23 0.103 0.23 0.23z'
                  ></path>
                  <path
                    fill='#cf5f2b'
                    d='M15.981 5.028c-1.328 0-2.606 0.751-2.576 2.065l0.39-0.235c0 0-0.3 0.53 0 1.334l0.359-0.235c0 0 0.3 1.275 1.138 2.178l0.12-0.235c0 0 0.15 0.451 0.569 0.844 0.419-0.392 0.569-0.844 0.569-0.844l0.12 0.235c0.839-0.902 1.138-2.178 1.138-2.178l0.36 0.235c0.299-0.804 0-1.334 0-1.334l0.389 0.235c0.030-1.314-1.248-2.065-2.576-2.065z'
                  ></path>
                  <path
                    fill='#5c4337'
                    opacity='0.1'
                    d='M16.019 5.028c0.849 0 1.675 0.308 2.155 0.872 0.408-0.471 0.835-0.988 1.245-1.544 0.417-0.567 0.64-1.144 0.744-1.687 0.228-1.19-0.119-2.206-0.258-2.547-0-0.001-0.001-0.002-0.001-0.003-0.021-0.050-0.036-0.085-0.045-0.104-0.001-0.002-0.002-0.004-0.002-0.005-0.003-0.006-0.005-0.011-0.005-0.011 0.139 0.149 0.257 0.295 0.357 0.437s0.181 0.281 0.248 0.413c0.067 0.132 0.118 0.259 0.158 0.378 0.199 0.595 0.103 1.002 0.103 1.002 0.116-0.31 0.145-0.629 0.136-0.908-0.005-0.139-0.019-0.268-0.036-0.38-0.041-0.262-0.1-0.433-0.1-0.433v0 0c0.006 0.005 0.011 0.010 0.016 0.015 0.068 0.062 0.135 0.125 0.2 0.187 0.036 0.035 0.072 0.069 0.107 0.104 0.033 0.032 0.067 0.064 0.099 0.096 0.048 0.047 0.094 0.095 0.141 0.142 0.018 0.018 0.037 0.037 0.055 0.055 0.053 0.054 0.104 0.108 0.155 0.162 0.010 0.011 0.021 0.022 0.032 0.034 0.056 0.059 0.11 0.119 0.163 0.178 0.005 0.005 0.010 0.011 0.015 0.016 0.057 0.063 0.112 0.126 0.166 0.188 0.001 0.001 0.002 0.003 0.003 0.004 3.348 3.877 1.815 6.947 1.815 6.947 1.188 1.869 1.208 3.422 0.953 4.483 1.080-0.532 1.342-1.077 1.342-1.077 0.074 0.299 0.026 0.65-0.085 1.008-0.051 0.601-0.399 1.298-0.723 1.831 0.507-0.382 1.155-0.975 1.155-0.975-0.037 0.205-0.095 0.404-0.167 0.597 0.034-0.030 0.053-0.048 0.053-0.048-0.147 0.807-0.607 1.531-1.024 2.049 0.586-0.307 0.734-0.64 0.734-0.64s0.021 0.234-0.131 0.58c0.011-0.019 0.017-0.031 0.017-0.031s0.083 0.899-1.225 1.788c-0.070 0.047-0.139 0.095-0.21 0.142 0.095 0.483 0.146 1.025 0.132 1.638l-1.283-0.775c0 0 0.987 1.744 0 4.394l-1.184-0.775c0 0-0.987 4.2-3.75 7.172l-0.395-0.775c0 0-0.493 1.486-1.875 2.778v-26.972z'
                  ></path>
                </svg>
              </div>
              <div className={styles.text}>Fox Games</div>
            </div>
            {/* Form Block */}
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={submit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                resetForm,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formInputBlock}>
                    <div className={styles.block}>
                      <Label
                        value={values.firstName}
                        text={'Your firstName'}
                        name={'firstName'}
                        type={'text'}
                        placeholder={'Example: Vadym'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMessage={
                          errors.firstName && touched.firstName
                            ? errors.firstName
                            : ''
                        }
                      />
  
                      <Label
                        value={values.lastName}
                        text={'Your lastName'}
                        name={'lastName'}
                        type={'text'}
                        placeholder={'Example: Stepanets'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMessage={
                          errors.lastName && touched.lastName
                            ? errors.lastName
                            : ''
                        }
                      />
                    </div>
  
                    <div className={styles.block}>
                      <Label
                        value={values.email}
                        text={'Your email'}
                        name={'email'}
                        type={'email'}
                        placeholder={'Example: some-name@gmail.com'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMessage={
                          errors.email && touched.email ? errors.email : ''
                        }
                      />
  
                      <Label
                        value={values.username}
                        text={'Your username'}
                        name={'username'}
                        type={'text'}
                        placeholder={'Example: Aliensky'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMessage={
                          errors.username && touched.username
                            ? errors.username
                            : ''
                        }
                      />
                    </div>
                    <Label
                      value={values.password}
                      text={'Your password'}
                      name={'password'}
                      type={'password'}
                      placeholder={'It must be reliable'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.password && touched.password ? errors.password : ''
                      }
                    />
  
                    <button
                      type='submit'
                      className={styles.formBtn}
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
            <div className={styles.topLeftBorder}></div>
            <div className={styles.topRightBorder}></div>
            <div className={styles.bottomLeftBorder}></div>
            <div className={styles.bottomRightBorder}></div>
          </>
          }
        </div>
      </div>
    );
  }
};

export default Registration;
