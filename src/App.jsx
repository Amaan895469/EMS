import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setlocalStorage, getlocalStorage } from "./Utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  //   if (loggedInUser) {
  //     setUser(loggedInUser.role);
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (authData) {
      const admin = authData.admin.find(
        (e) => email == e.email && password == e.password
      );
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (admin) {
        setUser("admin");
        setloggedInUserData(admin);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      } else if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
