import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { loadMyId } from "./redux/actions/profile";
import {useDispatch, useSelector} from "react-redux";
import ProfileContact from "./components/Profile/ProfileContact";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMyId());
  }, [dispatch]);

  const loading = useSelector((state) => state.profile.loading);

  return (
      !loading && (
          <BrowserRouter>
            <Route path="/:id?">
             <div className="App">
               <Sidebar />
               <Chat />
               <ProfileContact />
             </div>
            </Route>
          </BrowserRouter>
      )
  );
}

export default App;
