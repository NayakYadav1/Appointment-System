import Layout from "../components/Layout";
import React from "react";
import { Col, Form, Input, message, Row, TimePicker } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";

const ApplyDoctor = () => {
  const { user } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "api/v1/user/apply-doctor",
        { ...values, userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        }
      )
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.success);
        navigate('/');
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error)
      message.error('Something Went Wrong')
    }
  };
  return (
    <Layout>
      <h1 className="text-center">Apply Doctor</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4 className="">Personal Details : </h4>
        <Row gutter={20}>
          <Col xs={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your First Name" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Last Name" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item
              label="Phone"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Name Phone Number" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Email" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item label="Website" name="website">
              <Input type="text" placeholder="Your Website" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Address" />
            </Form.Item>
          </Col>
        </Row>

        <h4 className="">Professional Details : </h4>
        <Row gutter={20}>
          <Col xs={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Specialization" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Experience" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item
              label="Fee Per Consaltation"
              name="feesPerConsaltation"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Fee Per Consaltation" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item label="Timings" name="timings">
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}></Col>
          <Col xs={24} lg={8}>
            <button className="btn btn-primary form-btn" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
