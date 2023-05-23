import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components'
import { publicRoutes } from './router/PublicRoute'
import { Home } from './screens/Home'
import Contact from './screens/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Layout /> }>
          <Route path={ publicRoutes.HOME } element={ <Home /> } />
          <Route path={ publicRoutes.CONTACT } element={ <Contact /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )

  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <Counter />
  //     <p>
  //       Edit <code>src/App.tsx</code> and save to reload.
  //     </p>
  //     <span>
  //       <span>Learn </span>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org/"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         React
  //       </a>
  //       <span>, </span>
  //       <a
  //         className="App-link"
  //         href="https://redux.js.org/"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Redux
  //       </a>
  //       <span>, </span>
  //       <a
  //         className="App-link"
  //         href="https://redux-toolkit.js.org/"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Redux Toolkit
  //       </a>
  //       ,<span> and </span>
  //       <a
  //         className="App-link"
  //         href="https://react-redux.js.org/"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         React Redux
  //       </a>
  //     </span>
  //   </header>
  // </div>
}

export default App