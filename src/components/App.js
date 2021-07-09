
import './App.css';
import React,{useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

// const contacts = [

//   {
    
//     id:"1",
//     "name":"nafees",
//     "email":"iqbalnafee@gmail.com"

//   },
//   {
    
//     id:"2",
//     "name":"iqbal",
//     "email":"iqbal2@gmail.com"

//   }

// ];




function App() {

  const [contacts,setContacts] = useState([]);

  return (
    <div className="ui container">

      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
      
    </div>
  );
}

export default App;
