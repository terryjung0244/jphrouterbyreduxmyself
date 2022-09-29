import React, { Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./component/Home";
// import Posts from "./component/Posts";
// import Users from "./component/Users";

const Home = React.lazy(() => import("./component/Home"));
const Posts = React.lazy(() => import("./component/Posts"));
const Users = React.lazy(() => import("./component/Users"));

const route = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/users",
    title: "Users",
  },
  {
    to: "/posts",
    title: "Posts",
  },
];

const App = () => {
  return (
    <div>
      <div className="AppContainer">
        {route.map((route) => {
          return (
            // `/${route.to}` 와의 차이.
            <Link key={route.title} to={route.to}>
              {route.title}
            </Link>
          );
        })}
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/users"} element={<Users />} />
            <Route path={"/posts"} element={<Posts />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
};

//Users을 클릭후, 다시 새로고침했을때 Home을 나오게 하려면?
export default App;
