import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
  let textValue = "";

  function handleTextChange(e) {
    textValue = e.target.value;
    console.log("Text Value: ", textValue);
  }

  function handleCheckboxChange(e) {
    console.log("Checkbox status: ", e.target.checked);
  }


const handleSubmit = (e) => {
  e.preventDefault();
  
  const form = e.target;
  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;
  

  // Validasi sederhana
  if (!username || !email || !password) {
    alert("Semua field harus diisi!");
    return;
  }

  alert (
    `Data Form:\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`
  );

  // Reset form manual
  form.reset();


}


  const handleClick = () => {
    console.log('click');
  };

//Click dengan parameter event
  const handleClickWithEvent = (e) => {
    console.log("Synthetic Event Object: ", e);
    console.log("Event Target: ", e.target);
    console.log("Event Type: ", e.type);
    console.log("Native Event: ", e.nativeEvent);
    
  };


  const handleClickWithParam = (message) => {
    alert(message);
  }


  return (
    <>
      <h3>On Click Event</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickWithEvent(e)}>Click with Event</button>
      <button onClick={() => handleClickWithParam("Hello, React!")}>Click with Param</button>
      <h3>On Change Event</h3>
      <div>
        <label>Nama: </label>
        <input type="text" placeholder="Masukkan nama... " onChange={handleTextChange} />
      </div>
      <hr />
      <div>
        <label>
          <input type="checkbox" onChange={handleCheckboxChange} />
          Saya setuju
        </label>
      </div>
      <hr />
      <div>
        <label>
          <select onChange={(e) => console.log("Warna dipilih:", e.target.value)}>
            <option value="">---Pilih---</option>
            <option value="merah">Merah</option>
            <option value="kuning">Kuning</option>
            <option value="hijau">Hijau</option>
          </select>
        </label>
      </div>

      <h3>OnSubmit Tanpa Data Hooks</h3>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '10px'}}> 
          <label>Username: </label>
          <input type="text" name="username" placeholder="Masukkan username..." />
        </div>
        <div style={{marginBottom: '10px'}}>
          <label>Email: </label>
          <input type="email" name="email" placeholder="Masukkan email..." />
        </div>
        <div style={{marginBottom: '10px'}}>
          <label>Password: </label>
          <input type="password" name="password" placeholder="Masukkan password..." />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

    </>
  )


  
  };



export default App
