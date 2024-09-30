import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1 data-testId ='name'> I am Riyaz Basha Shaik  </h1>
<br/>
<br/>
<br/>
<a href='https://www.snapchat.com/'> click here for snapchat </a>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit perspiciatis necessitatibus repellendus repudiandae quos laudantium ex ea, nihil laborum non sequi ducimus dolorum vel ullam at, pariatur dolore fuga.</p>
<a href='src/Register.html'> <b>Bring Me Thanos</b> </a>

<a href='src/RegisterForm.html'> <b>Registration Page</b> </a>

    </>
  )
}

export default App
