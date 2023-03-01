import { NotificationContainer } from "react-notifications";
import "./App.css";
import "./reset.css";
import "react-notifications/lib/notifications.css";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <>
      <MainRoutes />
      <NotificationContainer />
    </>
  );
}

export default App;

// <div className="App">
//   <header className="App-header"></header>
// </div>
