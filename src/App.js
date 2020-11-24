import React, {useEffect} from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
// import Profile from "./components/Profile";
import {loadContacts} from "./redux/actions/contacts";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadContacts());
    }, [dispatch]);

  return (
    <div className="App">
      <Sidebar />
      <Chat />
      {/*<Profile />*/}
    </div>
  );
}

export default App;
