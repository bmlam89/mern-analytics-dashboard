import { CssBaseline, Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline/>
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar/>
          <Routes>
            <Route path="/" element={ <Dashboard/> } />
            <Route path="/predictions" element={<div>Predictions Page</div>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )
}

export default App