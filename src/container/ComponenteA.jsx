import React, { Component } from 'react';
import ContactContainer from '../components/pure/ComponenteB';
import { Contact } from '../models/contact.class'

const ContactComponents = () => {

    const Contacto = new Contact('Manuel', 'López', 'manuel@gmail.com', false);
    const OnOff = () => {
        console.log('TODO: cambiar estado de una tarea');
    }

    return (
        <div>
            <h1>
                Contacto: 
            </h1>
            <ContactContainer contacto={Contacto}></ContactContainer>
        </div>
    );
};

export default ContactComponents;

