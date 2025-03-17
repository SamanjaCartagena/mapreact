import logo from './logo.svg';
import './App.css';



function App() {
  const employees=[
    'Anthony',
    'Kevin',
    'Stephanie',
    'George'
  ]
  const moreEmployees=[
    {
      'name':'Mary',
      'age':28,
      'work':'teacher'
    },
    {
      'name':'David',
      'age':28,
      'work':'army'
    },
  ]
  return (
    <div className="App">
      {employees.map(employee => {
        return (
          <h1>{employee}</h1>
        )
      })}
      <hr/>
      {moreEmployees.map(e=> {
        return (
          <h1>{e.name}-{e.age}</h1>
        )
      })}
     

    
    </div>
  );
}

export default App;
