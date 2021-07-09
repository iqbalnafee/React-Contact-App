
import './App.css';
import React,{useState,useEffect} from 'react';
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

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts,setContacts] = useState([]);

  const addContacts = (state) => {
    setContacts([...contacts,{id:contacts.length,name:state.name,email:state.email}]);
    //setContacts([...contacts,state]);
  }

  useEffect(() => {
    const retreiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retreiveContacts) setContacts(retreiveContacts);
  },[]);

  useEffect(() => {

    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));

  },[contacts]);

  return (
    <div className="ui container">

      <Header />
      <AddContact addContacts={addContacts}/>
      <ContactList  contacts={contacts}/>
      
    </div>
  );
}

export default App;
