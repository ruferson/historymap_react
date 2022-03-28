import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "./styles.css";
import {  useLocation } from "wouter";

function Singup () {

  
  const [location, setLocation] = useLocation();

  if (JSON.parse(localStorage.getItem("userData")).isLogged){
    setLocation("/")
  }

  const [estado, setEstado] = useState({
    signupData: {
      name: "",
      email: "",
      phone: "",
      password: "",
      isLoading: "",
    },
    msg: ""
  })

  function onChangehandler (e, key) {
    const { signupData } = estado;
    signupData[e.target.name] = e.target.value;
    setEstado({ 
      msg: estado.msg,
      signupData: signupData
    });
  };

  function onSubmitHandler (e) {
    e.preventDefault();
    setEstado({ 
      msg: estado.msg,
      signupData: {
        name: estado.signupData.name,
        email: estado.signupData.email,
        phone: estado.signupData.phone,
        password: estado.signupData.password,
        isLoading: true
      }
    });
    axios
      .post("http://localhost:8000/api/user-signup", estado.signupData)
      .then((response) => {
        if (response.data.status === 200) {
          setEstado({
            msg: response.data.message,
            signupData: {
              name: "",
              email: "",
              phone: "",
              password: "",
              isLoading: false
            },
          });
          setTimeout(() => {
            setEstado({ 
              msg: "",
              signupData: {
                name: estado.signupData.name,
                email: estado.signupData.email,
                phone: estado.signupData.phone,
                password: estado.signupData.password,
                isLoading: false
              }
            });
          }, 2000);
        }

        if (response.data.status === "failed") {
          setEstado({ 
            msg: response.data.message,
            signupData: {
              name: estado.signupData.name,
              email: estado.signupData.email,
              phone: estado.signupData.phone,
              password: estado.signupData.password,
              isLoading: false
            }
          });
          setTimeout(() => {
            setEstado({ 
              msg: "",
              signupData: {
                name: estado.signupData.name,
                email: estado.signupData.email,
                phone: estado.signupData.phone,
                password: estado.signupData.password,
                isLoading: false
              }
            });
          }, 2000);
        }
      });
  };
  
    const isLoading = estado.isLoading;

    return (
      <div>
        <h1>REGISTRARSE
            <Button
              className="text-center mb-4"
              color="success"
              onClick={()=>setLocation("/login")}
            >
              Iniciar sesión
            </Button>
            </h1>
        <Form className="containers shadow">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="name"
              name="name"
              placeholder="Enter name"
              value={estado.signupData.name}
              onChange={onChangehandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email id</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              value={estado.signupData.email}
              onChange={onChangehandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number</Label>
            <Input
              type="phone"
              name="phone"
              placeholder="Enter phone number"
              value={estado.signupData.phone}
              onChange={onChangehandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              value={estado.signupData.password}
              onChange={onChangehandler}
            />
          </FormGroup>
          <p className="text-white">{estado.msg}</p>
          <Button
            className="text-center mb-4"
            color="success"
            onClick={onSubmitHandler}
          >
            Sign Up
            {isLoading ? (
              <span
                className="spinner-border spinner-border-sm ml-5"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              <span></span>
            )}
          </Button>
        </Form>
      </div>
    );
  }

  export default Singup;