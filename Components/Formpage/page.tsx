import { Field, Form, Formik } from 'formik'
import React from 'react'

const Formpage = () => {
  return (
    <div>
        <h2>Login</h2>
      <Formik>
        {() => (

       <Form>
       <div>
        <Field
        type="text"
        
         />
       </div>
       </Form>
        )

        }
      </Formik>
    </div>
  )
}

export default Formpage
