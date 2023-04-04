import React, { useEffect } from "react";

import { loginRequired } from "../../util/loginRequired";
import "./Profile.css";

function Profile() {
  useEffect(() => {
    loginRequired();
  }, []);

  return (
  <div>Profile</div>
  );
}

export default Profile;
