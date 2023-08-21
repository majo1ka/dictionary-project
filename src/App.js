import "./App.css";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunshine" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/majo1ka/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Maja
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
