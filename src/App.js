import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./componenets/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes> */}
    </>
  );
}
export default App;
