import '../styles/App.css'
import {Route,Routes,} from "react-router";
import Home from "./Home.jsx";
import {ThemeProvider} from "@/components/ui/theme-provider.jsx";
function App() {

  return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Routes>
              <Route path="/" element={<Home/>}/>/
          </Routes>
      </ThemeProvider>
  )
}

export default App
