import './App.css'
import { Provider } from "react-redux";
import { store } from './app/store';
import Todo from './Todo';
import Form from './Form';

function App() {
  
  return (
    <>
      <Provider store={store} >
        <Form/>
        <Todo/>
      </Provider>
    </>
  )
}

export default App
