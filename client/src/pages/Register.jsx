  import React from 'react'
  import '../styles/RegisterStyles.css'
  import { Link, useNavigate } from 'react-router-dom'
  import axios from 'axios';
  import Form from 'antd/es/form/Form';
  import { Input, message } from 'antd';
  import { useDispatch } from 'react-redux';
  import { showLoading, hideLoading } from '../redux/features/alertSlice';

  const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    // Form Handler
    const onFinishHandler = async(values) => {
      try{
        dispatch(showLoading())
        const res = await axios.post('/api/v1/user/register', values);
        dispatch(hideLoading())
        if(res.data.success) {
          message.success("Registered Successfully");
          navigate('/login');
        } else {
          message.error(res.data.message);
        }
      } catch(error) {
        dispatch(hideLoading())
        console.log(error);
        message.error('Something went wrong')
      }
    }

    return (
      <>
        <div className='form-container'>
          <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
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

  export default Register;