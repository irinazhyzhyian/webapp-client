import { useState } from 'react';
import './App.css';
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [surname, setSurname] = useState("");
  const [position, setPosition] = useState("");
  const [birthday, setBirthday] = useState("");

  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    Axios.get('http://localhost:5000/employees').then((response) => setEmployees(response.data));
  };

  const addEmployee = () => {
    Axios.post('http://localhost:5000/create', {
      name: name, 
      secondName: secondName, 
      surname: surname,
      birthday: birthday, 
      position: position
    }).then(() => console.log("OK"));
  }

  return (
    <div className="App">
      <div className='form'>
        <label>Name</label>
        <input name='name' value={name} onChange={(e) => setName(e.target.value)} />
        <label>Second Name</label>
        <input name='secondName' value={secondName} onChange={(e) => setSecondName(e.target.value)} />
        <label>Surname</label>
        <input name='surname' value={surname} onChange={(e) => setSurname(e.target.value)} />
        <label>Position</label>
        <input name='position' value={position} onChange={(e) => setPosition(e.target.value)} />
        <label>Birthday</label>
        <input name='birthday' type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        <button onClick={addEmployee}>Save</button>
        <hr style={{width: '100%', height: 3}}/>
        <button onClick={getEmployees}>Get employees</button>
        {console.log(employees)}
        {employees.map(employee => (
        <div key={employee.id}>
          
          <p>Name: {employee.name}</p>
          <p>Second Name: {employee.second_name}</p>
          <p>Surname: {employee.surname}</p>
          <p>Position: {employee.position}</p>
          <p>Birthday: {employee.birthday}</p>
          <hr style={{width: '100%', height: 3}}/>
        </div>))}
      </div>
    </div>
  );
}

export default App;
