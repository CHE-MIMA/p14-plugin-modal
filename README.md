# modal Projet14 openClassrooms

Simple Modal component for React.

# Installation

Install with npm: 

npm i plugin-react-component-modal


## Examples

Here is a simple example of plugin-react-component-modal being used in an form.

import React, { useState } from 'react';

import Modal from 'plugin-react-component-modal';


      function Form() = ( ) => {

         const [openModal, setOpenModal] = useState();

        const [firstName, setFirstName] = useState("");
    
    
        const closeModalOnClick = ( ) => {
        setOpenModal(false);
        }
    
       const handleSubmit = (e) => {
        e.preventDefault();
        setOpenModal(true);
        }

   return (

    <div>
     <form onSubmit={handleSubmit}  id="form">
      <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" name='firstName' onChange={(e) => setFirstName(e.target.value)}
          value={firstName}/>
            <div className='Btn'>
                    <button type='submit'>Submit</button>
            </div>
      </form>
       <Modal openModal={openModal}
              closeModal={closeModalOnClick}
              title="employé created !"
              closeButton="x" />
    </div>
  );}


## Options
OpenModal: boolean

Control modal state from component

closeModal: Function

Handle modal closing.

title: JSX.Element | string

Place here your Content of title

closeButton: (JSX.Element | string)

Content of your closing button
