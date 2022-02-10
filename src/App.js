import './App.css';
import Profile from './profile/Profile';

function App() {
  const fullName="Amani Bouzouita"
  const bio="I'm a science material doctor converted to a passionate programming freelancer with 1 year experience in web fullstack developper. Inspired by sciences i can realise creative and fascinating web.I love sharing and contributing to the tech community and it become a significant part of my career.When I'm not coding, you can find me geeking about Technology and Innovation,training, trying new food recipes, and exploring different ways of creating content that can help people pivot their tech careers."
  const profession="I'm an R&D Engineer in a startup working on prototyping and scaling-up new Technology/Products "
  const handleName=()=>{
    alert(`${fullName}`)
  }
  return (
    <div>
      <h1 style={{color:'darkBlue',textAlign:'center'}}>PROFILE</h1>
  
    <Profile  fullName={fullName} bio={bio} profession={profession} handleName={handleName}>  <img style={{borderRadius:'50%'}} src="https://www.doyoubuzz.com/var/users/_/2019/1/10/16/1767430/avatar/1802995/avatar_cp_big.jpg?t=1635281649" /></Profile>
    </div>
  );
}

export default App;
