import { Fragment } from "react";

import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage";
import AWSCorner from "./pages/AWSCorner";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Fragment>
      <NavBar />
      <main style={{marginTop: 50}}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/AWSCorner" element={<AWSCorner />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
