import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Appmeight.css'
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';

// RestApiのアクセス先（app_id=3のみ使用）GET https://testservice1.microcms.io/api/v1/profile
// X-MICROCMS-API-KEY=8EKSLz6sXcJhT1NygqPjvtFFhn89aM5evV4f

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <AddToHomeScreenIcon />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
