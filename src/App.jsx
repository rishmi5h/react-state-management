import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FirstLesson from "./components/useState/FirstLesson";
import SecondLesson from "./components/useReducer/SecondLesson";
import Home from "./components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />}>
      <Route index element={<Home />} />
      <Route path='useState' element={<FirstLesson />} />
      <Route path='useReducer' element={<SecondLesson />} />
    </Route>
  )
);

function App() {
  return (
    <>
      {/* <FirstLesson /> */}
      {/* <RouterProvider router={router} /> */}
      <SecondLesson />
    </>
  );
}

export default App;
