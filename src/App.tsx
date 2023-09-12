import "./App.css";
import Header from "./components/layout/Header";
import Router from "./routes/Router";

function App() {
  return (
    <div className="body">
      <Header />
      <div >
        <Router />
      </div>
    </div>
  );
}

export default App;
