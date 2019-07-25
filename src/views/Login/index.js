import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import { Formik, Form, Field } from 'formik';

const Login = () => (
  <>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={() => {
        console.log('login');
      }}>
      {() => (
        <Form>
          <Field name="username" type="text" />
          <Field name="password" type="password" />
          <button type="submit">Sign in</button>
        </Form>
      )}
    </Formik>
  </>
);

export default Login;
