import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppList from './components/AppList';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AppList/>
    </div>
  );
}

export default App;
