import React from 'react'
import '../styles/RegisterStyles.css'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
// import Form from 'antd/es/form/Form'

const Register = () => {
  
  // Form Handler
  const onfinishHandler = (values) => {
    console.log(values);
  }

  return (
    <>
      <div className='form-container'>
        <Form layout='vertical' onFinish={onfinishHandler} className='register-form'>
          <h3 className='text-center'>Register</h3>
          <Form.Item  label="Name" name="name">
            <Input type='text' required />
          </Form.Item>
          <Form.Item  label="Email" name="email">
            <Input type='Email' required />
          </Form.Item>
          <Form.Item  label="Password" name="password">
            <Input type='password' required />
          </Form.Item>
          <Link to='/login' className='m-2'>Already user login here</Link>
          <button className='btn btn-primary' type='submit'>
            Register
          </button>
        </Form>
      </div>
    </>
  )
}

export default Register