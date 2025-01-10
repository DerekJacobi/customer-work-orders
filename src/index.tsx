import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import CalendarView from "./components/calendar-view.tsx";
import Boatyard from "./components/boatyard.tsx";
import WorkOrders from "./components/work-orders/work-orders.tsx";
import UserSettings from "./components/settings/user-settings.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const WorkOrderSettings = () => {
  return <h1>Work Order Settings</h1>;
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<CalendarView />} />
          <Route path="boatyard/:boatyard" element={<Boatyard />} />
          <Route path="work-orders" element={<WorkOrders />} />
          <Route path="settings">
            <Route path="user" element={<UserSettings />} />
            <Route path="work-orders" element={<WorkOrderSettings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
