import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import "./scss/app.scss";

const App = () => {
  return (
    <>
      <Header />
      <div className="app-wrapper">
        <Header />
        <Header />
        <Header />
        <Navbar />
        <Profile />
        <Header />
      </div>
      <Header />
    </>
  );
};

export default App;
