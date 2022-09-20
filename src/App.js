import './App.css';
import Container from './Container';
import NavBar from './NavBar';
import StudentTable from './StudentTable';

function App(){
  return (
    <Container>
      <div>
        <NavBar />
      </div>
      { <StudentTable /> }
    </Container>
  );
}

export default App;