import './App.css'
import CustomImage from './components/CustomImage'
import ClassComponent from './components/ClassComponent'

// These React components are called Functional Components
// there's another more powerful/complex way of writing React Components
// because you can create Class Components

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Strive Afternoons are fun!</h1>
        <ClassComponent name='Stefano' />
        <ClassComponent name='Stefano' />
        <ClassComponent name='Stefano' />
        <CustomImage animal='cat' />
      </header>
    </div>
  )
}

export default App
