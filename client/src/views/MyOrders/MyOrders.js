import React, { useEffect } from "react";

import { loginRequired } from "../../util/loginRequired";
import "./MyOrders.css";

function MyOrders() {
  useEffect(() => {
    loginRequired();
  }, []);

  return <div>MyOrders</div>;
}

export default MyOrders;
