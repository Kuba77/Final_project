import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCustomer, removeCustomer } from "../../store/customer/reducer";
import { setErors, clearErrors} from "../../store/errors/reducer";
import { logOrRegisterCustomer, registerCustomer } from "../../api/userApi";
import ValidationSchema from "../../components/form/ValidationSchema";
import RegistrationForm from "../../components/form/RegistrationForm";
import {errorMessage} from "../../store/selectors"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const RegistrationPage = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state);


    const singUp = useCallback(
        async (value) => {
            try {
                let newCustomer = await registerCustomer(value);
                if (newCustomer.message) {
                    dispatch(setErors(newCustomer.message));
                } else {
                    dispatch(setCustomer(newCustomer.data));
                    dispatch(clearErrors());
                }
            } catch (err) {
                dispatch(console.log(setErors(err.response)));

            }
        },
        [dispatch]
    );

    const initialValues = {
        firstName: "",
        lastName: "",
        login: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const validationSchema = ValidationSchema;


    const onSubmit = values => {
        singUp(values);
    }

    return (
        <>
           <Header />
           <RegistrationForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} errorMessage={errorMessage(store)} /> 
           <Footer /> 
        </>
    );
};

export default RegistrationPage;
