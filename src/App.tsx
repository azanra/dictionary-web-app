import "./App.css";

import { ThemeProvider } from "./shared/hooks/useTheme";
import Home from "./pages/Home";
import { FontProvider } from "./shared/hooks/useFont";

function App() {
  return (
    <ThemeProvider>
      <FontProvider>
        <Home />
      </FontProvider>
    </ThemeProvider>
  );
}

export default App;
