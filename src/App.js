import Routes from "./Routes";
import { Breadcrumb, Header, Sidebar } from "./Components";
import "./app.css";

function App() {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Header />
        <Breadcrumb />
        <Routes />
      </div>
    </>
  );
}

export default App;
