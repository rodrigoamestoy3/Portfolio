import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactContainer = ({ contacto }) => {
    
    return (
        <div>
            <h2>
                Nombre: { contacto.name + ' ' + contacto.apellido}
            </h2>
            <h4>
                Email: { contacto.email }
            </h4>
            <h5>
                Estado: { contacto.conectado ? 'En Linea':'Fuera de Linea' }
            </h5>
        </div>
    );
};


ContactContainer.propTypes = {
    ContactContainer: PropTypes.instanceOf(Contact),
};

export default ContactContainer