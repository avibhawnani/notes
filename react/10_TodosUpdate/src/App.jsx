
import { Provider } from 'react-redux'
import './App.css'
import { store } from './redux/store'
import TodoApp from './components/TodoApp'

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <TodoApp />
      </div>
    </Provider>
  )
}

export default App
