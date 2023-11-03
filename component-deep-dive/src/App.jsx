import './App.css'

function App()
{
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number, index) => <li key={index}>{number * 2}</li>);
  console.log(doubled);
  return (
    <ul>
      {doubled}
    </ul>
  )
}

export default App