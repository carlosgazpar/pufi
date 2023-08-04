"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

import Notification from "../common/Notification";

import { ErrorMessage, Field, Form, Formik } from "formik";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

import { getDatabase, push, ref } from "firebase/database";
import app from "../helpers/firebase-config";
import { triggerDisplay } from "@/redux/features/formSlice";

const NewsletterForm = () => {

  const display = useAppSelector((state) => state.formReducer.value);
  const dispatch = useAppDispatch();

  const validate = (value, id) => {
    let errorMessage;

    if (!value) {
      errorMessage = "Por favor ingrese un correo";
      return errorMessage;
    }

    if (id === "email") {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errorMessage = "Dirección de correo electrónico inválida";
        return errorMessage;
      }
    }

    return errorMessage;
  };

  const handleSubmit = (values, resetForm) => {
    const database = getDatabase(app);
    const databaseRef = ref(database, "newsletter");
    const pushDatabase = push(databaseRef, values);

    pushDatabase
      .then(() => {
        resetForm();
        dispatch(triggerDisplay())
        setTimeout(() => {
          dispatch(triggerDisplay())
        }, 5000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
      >
        <Form className="newsletter-form">
          <div className="newsletter-form-item">
            <Field
              id="email"
              name="email"
              placeholder="Ingresa tu email"
              validate={(value) => validate(value, "email")}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <span className="newsletter-form-error">
            <ErrorMessage name="email" />
          </span>
        </Form>
      </Formik>
      <Notification
        icon={faCheckCircle}
        message="Su mensaje se ha enviado exitosamente"
        isVisible={display}
      />
    </>
  );
};

export default NewsletterForm;
