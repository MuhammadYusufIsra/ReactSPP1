import React from 'react'
import Utama from './pages/utama'
import { Link } from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <div> <hr />
        <Link to="/">Home</Link> |
        <Link to="/siswa">Siswa</Link> |
        <Link to="/petugas">Petugas</Link> |
        <Link to="/kelas">Kelas</Link> |
        <Link to="/spp">SPP</Link> |
        <Link to="/transaksi">Transaksi</Link> |
        <Link to="/history">Histori</Link><hr />
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;