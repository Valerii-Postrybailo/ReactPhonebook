import React from "react";
import {Filter} from "./Filter/Filter";
import {ContactList} from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";

export default function App() {

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: "column",
          fontSize: 20,
          color: '#010101'
        }}
      >

          <div>
            <h1 style={{textAlign: "center"}}>
              Phonebook
            </h1>

            <ContactForm />

            <h2 style={{textAlign: "center"}}>
              Contacts
            </h2>

            <Filter/>
            
            <ContactList/>
          </div>
      </div>
    );
}


