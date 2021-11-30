import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function RegistrationForm () {
  const options = [
    { key: 'Email', value: 'emailmoc' },
  ]
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string()
      .required('Required')
      .min(7, "Must be 7 characters or more"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
  })

  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
            <div className="form__wrapper">
                <h1>Registration form</h1>
          <Form>
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <FormikControl
              control='input'
              type='password'
              label='Confirm Password'
              name='confirmPassword'
            />
            <div className="button__wrapper">
            <button className="form__btn" type='submit' disabled={!formik.isValid}>
              Submit
            </button>
            </div>
          </Form>
          </div>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm