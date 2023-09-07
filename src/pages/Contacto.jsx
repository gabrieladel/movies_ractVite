import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import '../App.css'

function Contacto () {
    return (
        <>
        <MDBValidation noValidate id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
        <h2>Contacto</h2>
  
        <MDBValidationItem invalid feedback='Ingrese su nombre.'>
          <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required />
        </MDBValidationItem>
  
        <MDBValidationItem invalid feedback='Igrese su email.'>
          <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required />
        </MDBValidationItem>
  
        <MDBValidationItem invalid feedback='Ingrese su consulta.'>
          <MDBTextArea wrapperClass='mb-4' label='Message' required />
        </MDBValidationItem>
  
        <MDBValidationItem feedback=''>
          <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
        </MDBValidationItem>
  
        <MDBBtn type='submit' color='primary' block className='my-4'>
          Enviar
        </MDBBtn>
      </MDBValidation>
         </>
    );
}
export default Contacto;