import logo from './logo.svg';
import './App.css';
import Loging from './Loging';
import { AuthProvider } from './Contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Loging/>
      </AuthProvider>
    </div>
  );
}

export default App;
