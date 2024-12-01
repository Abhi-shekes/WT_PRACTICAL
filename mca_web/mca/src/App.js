import './App.css';

import FacultyInfo from "./components/FacultyInfo";
import VisionMission from "./components/VisionMission"
import FeedbackForm from "./components/FeedbackForm"


function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>MCA Department</h1>


      </header>
      <main>
        <VisionMission/>
        <FacultyInfo/>
        <FeedbackForm/>

      </main>
    </div>
  );
}

export default App;
