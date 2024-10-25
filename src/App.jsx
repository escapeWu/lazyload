import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './components/LazyCard.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {Array(15)
        .fill('_')
        .map((_, index) => (
          <Card title={index} key={index} />
        ))}
    </div>
  )
}

export default App
