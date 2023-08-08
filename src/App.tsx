import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Home = React.lazy(() => import("./pages/Home"));
const Diaries = React.lazy(() => import("./pages/Diaries"));
const Login = React.lazy(() => import("./pages/Login"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));

function App() {

  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaries" element={<Diaries />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
