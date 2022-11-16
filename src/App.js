import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";

import Navbar from "./components/Navbar";
import Nopage from "./components/NoPage";
import Project from "./components/Project";
import Skill from "./components/Skills";

function App() {
  return (
    <div className="App" sx={{ padding: "0 10px", position: "relative" }}>
      <Grid container sx={{ position: "absolute", top: 0, bottom: 0 }}>
        <Grid item xs={4} sx={{ backgroundColor: "#25262A" }}>
          <Navbar />
        </Grid>
        <Grid item xs={8}>
          <Routes>
            <Route index element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Project />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
