import './App.css';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">

      <Profile fullName="Jules Ko DIOUF" bio="Software engineering enthusiast !" profession="Web | Software Developer">
        <img src="/img/profil.jpg" alt="Photo de profile" style={{width:'100%', borderRadius: '5px'}} />
      </Profile>

    </div>
  );
}

export default App;
