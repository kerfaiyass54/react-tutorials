import LoginMessage from "./components/Login";


function App() {
  return (
    <div>
      <LoginMessage isLoggedIn={true} />
      <LoginMessage isLoggedIn={false} />
    </div>
  );
}

export default App;