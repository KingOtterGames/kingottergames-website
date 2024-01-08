import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Tab-Home/Home";
import News from "./views/Tab-News/News";
import Games from "./views/Tab-Games/Games";

import Fableverse from "./views/Tab-Fableverse/Fableverse";
import GuideFableverse from "./views/Guide-Fableverse/GuideFableverse";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/games" element={<Games />} />
        </Route>
        <Route path="/games">
          <Route path="fableverse" element={<Fableverse />} />
        </Route>
        <Route path="/guides">
          <Route path="fableverse" element={<GuideFableverse />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
