import logo from './logo.svg';
import './App.css';
import Students from './Students'



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
   const students=[
    {
      'name':'Ciara',
      'id':2834,
      'work':'teacher'
    },
    {
      'name':'Vicky',
      'id':2884,
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
      <hr/>
      {students.map((student)=>
      <Students name={student.name} id={student.id}/>
      )}
     

    
    </div>
  );
}

export default App;
