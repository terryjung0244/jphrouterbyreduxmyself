import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getJphUserByNameRequestAction } from "../redux/jphAction";

const Posts = () => {
  const { userName } = useParams();

  console.log(userName);

  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.jphReducer);

  useEffect(() => {
    dispatch(getJphUserByNameRequestAction({ name: userName }));
  }, []);

  return <div>아하하하하</div>;
};

export default Posts;
