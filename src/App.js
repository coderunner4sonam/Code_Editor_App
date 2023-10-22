// Importing the CSS file to style the components
import './App.css';

// Importing the Header and MainBody components
import Header from "./component/Header";
import MainBody from './component/MainBody';

function App() {
  return (
    <div>
      {/* Rendering the Header component at the top of the app */}
      <Header />

      {/* Rendering the MainBody component below the Header */}
      <MainBody />
    </div>
  );
}

// Exporting the App component as the entry point of the application
export default App;
