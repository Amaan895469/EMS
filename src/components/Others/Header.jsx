import React, { useState } from "react";
import { setLocalStorage } from "../../Utils/LocalStorage";

const Header = ({ data }) => {
  // const [user, setuser] = useState("");

  // if (!data) {
  //   setuser("Admin");
  // } else {
  //   setuser(data.firstName);
  // }

  const logouthandler = () => {
    localStorage.removeItem("loggedInUser");
    // window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello
        <br />
        <span className="text-3xl font-semibold">user 👋</span>
      </h1>
      <button
        onClick={logouthandler}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
