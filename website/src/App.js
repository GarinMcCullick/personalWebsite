import './App.css';
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main> 
          <div className='art-wrapper'>
            <div className='art1'></div>
            <div className='art2'></div>
          </div>
        <section className='glass'>
          <Dashboard />
        </section>
        </main>
      </header>
    </div>
  );
}

export default App;
