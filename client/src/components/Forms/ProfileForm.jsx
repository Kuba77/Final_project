import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { customerData } from "../../store/selectors";
import { Formik, Form } from "formik";
import classes from "./ProfileForm.module.scss";
import { BiImageAdd } from 'react-icons/bi'

const ProfileForm = (props) => {
  const { initialValues, validationSchema, onSubmit } = props;
  const store = useSelector((state) => state)


  return (
    <div class={classes.profile}>
    <div class={classes.profile__content}>
            <div class={classes.profile__img}>
               <img src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1639842015/sideAssets/clipart2034196_wq48ba.png" alt="profile picture"/>
               
            </div>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
            <div class={classes.profile__forms}>
              
            <Form className={classes.profile__registre}>
            <img
               className={classes.form__avatar}
                src={
                  customerData(store).avatarUrl
                  ? customerData(store).avatarUrl
                  : "https://res.cloudinary.com/dl7xlw7cl/image/upload/v1639851745/sideAssets/overlord-keeno-fasris-inberun-evileye-oboi-8754_w635_ld1qrx.jpg"
                  }   
                alt="profile"
                />
            
  
            <div class={classes.profile__box}>
            
              <input
                className={classes.form__input}
                placeholder={customerData(store).firstName}
                control="input"
                type="text"
                label="firstName"
                name="firstName"
              />
              </div>
              <div class={classes.profile__box}>
              <input
                className={classes.form__input}
                placeholder={customerData(store).lastName}
                control="input"
                type="text"
                label="lastName"
                name="lastName"
              />
              </div>
              <div class={classes.profile__box}>
              <input
                className={classes.form__input}
                value={customerData(store).email}
                control="input"
                type="email"
                label="Email"
                name="loginOrEmail"
              />
              </div>
              <div class={classes.profile__box}>
              <input
                className={classes.form__input}
                control="input"
                type="password"
                label="password"
                name="password"
              />
              </div> 
            <button className={classes.profile__button}>
              Apply Change
            </button>
            </Form>
            </div>
        );
      }}
    </Formik>

    
    </div>
    
    </div>

  );
}

export default ProfileForm;
