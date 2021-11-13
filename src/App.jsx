import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AppHeader } from "./cmp/AppHeader";
import { TabNav } from "./cmp/TabNav";
import { TimeFrame } from "./cmp/TimeFrame";
import { History } from "./pages/History";
import { Overview } from "./pages/Overview";

function App() {
  return (
    <Router>
      <AppHeader />
      <main>
        <TabNav />
        <TimeFrame />
        <Routes>
          <Route exact path="/history" element={<History />} />
          <Route exact path="/overview" element={<Overview />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
