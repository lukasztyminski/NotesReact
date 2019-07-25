import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addItem as addNoteAction } from 'actions';

import Button from 'components/atoms/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading';
import { StyledWrap, StyledInput, StyledTextarea, StyledError } from './style';

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
  <StyledWrap isVisible={isVisible} activeColor={pageContext}>
    <Heading style={{ marginBottom: 20 }}>Create new {pageContext}</Heading>
    <Formik
      initialValues={{ title: '', content: '', articleUrl: '', twitterName: '', created: '' }}
      validate={values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        }
        return errors;
      }}
      onSubmit={values => {
        addItem(pageContext, values);
        handleClose();
      }}>
      {({ isSubmitting }) => (
        <Form>
          <StyledInput as={Field} name="title" type="text" placeholder="title" />
          <StyledError as={ErrorMessage} name="title" component="div" />
          {pageContext === 'twitters' && (
            <StyledInput
              as={Field}
              name="twitterName"
              type="text"
              placeholder="twitter name eg. tymonDEV"
            />
          )}
          {pageContext === 'articles' && (
            <StyledInput as={Field} name="articleUrl" type="text" placeholder="link" />
          )}
          <StyledTextarea as={Field} name="content" placeholder="Enter message"></StyledTextarea>
          <Button
            disabled={isSubmitting}
            type="submit"
            style={{ marginTop: 20 }}
            pageType={pageContext}>
            Add {pageContext}
          </Button>
        </Form>
      )}
    </Formik>
  </StyledWrap>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addNoteAction(itemType, itemContent)),
});

export default connect(
  null,
  mapDispatchToProps
)(withContext(NewItemBar));
