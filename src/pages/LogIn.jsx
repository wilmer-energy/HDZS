import React from 'react';
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
const LogIn = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const submit = data => {
        console.log(data)
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
            .then((res) => {
                console.log(res.data.data.token)
                localStorage.setItem("token", res.data.data.token)

                navigate("/")
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    window.alert("Invalid credentials")
                }

            })
    }

    return (
        <div className='LoginContainer'>

            <Header />
            <div className='Login'>

                <Form onSubmit={handleSubmit(submit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register("password")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className='ButtonLogin'>
                        <Button variant="primary" type="submit" style={{width:"100%"}}>
                            Login
                        </Button>
                    </div>

                </Form>
            </div>

            <Footer />

        </div>

    );
};

export default LogIn;