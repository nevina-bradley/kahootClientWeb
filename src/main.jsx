import React from 'react'
import ReactDOM from 'react-dom/client'
import QuestionsAnswersPage from './containers/questionsAnswers';
import SignUpButton from "./components/signUpButton";
import LogInButton from "./components/logInButton";
import Landing from './containers/landing';
import FinalLeaderboard from './containers/finalLeaderboard';
import Waiting from './containers/waiting';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/question",
    element: <QuestionsAnswersPage/>,
  },
  {
    path: "/",
    element: <QuestionsAnswersPage/>,
  },
  {
    path: "/sign-up",
    element: <SignUpButton/>
  },
  {
    path: "/log-in",
    element: <LogInButton/>
  },
  {
    path: "/landing",
    element: <Landing/>
  },
  {
    path: "/final-leaderboard",
    element: <FinalLeaderboard/>
  },
  {
    path: "/waiting",
    element: <Waiting/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)