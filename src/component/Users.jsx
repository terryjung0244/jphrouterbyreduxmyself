import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJphUsersRequestAction } from "../redux/jphAction";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJphUsersRequestAction());
  }, []);

  return <div>우랄라라라랄</div>;
};

export default Users;
