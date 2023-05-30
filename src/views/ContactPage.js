import React from "react";
import Contact from "../components/Contact/Contact";
import ContactsForm from "../components/Contact/ContactsForm";
import Map from "../components/Contact/Map";
import { useJsApiLoader } from "@react-google-maps/api";

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
  lat: 59.955413,
  lng: 30.337844,
};

const ContactPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    key: API_KEY,
  });

  return (
    <div>
      <div className='container'>
        <div className='container_contact'>
          <h2 className='contact__name'>Контакты</h2>
          <div className='contact__row'>
            <div className='contact__items'>
              <Contact />
            </div>
            {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading</h2>}
          </div>
          <ContactsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
