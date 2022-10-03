import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJphUsersRequestAction, getJphUserByNameRequestAction } from "../redux/jphAction";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch();
  const { jphData } = useSelector((state) => state.jphReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getJphUsersRequestAction());
  }, []);

  const onClickUser = (userName) => {
    dispatch(getJphUserByNameRequestAction(userName));
    navigate(`/posts/${userName.name}`);
  };

  return (
    <div>
      <div>
        {jphData.users ? (
          <div>
            {jphData.users.map((user) => {
              return (
                <div key={user.id} onClick={() => onClickUser(user.name)}>
                  {user.name}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div></div>
    </div>
  );
};

export default Users;
