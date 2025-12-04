import { CssBaseline } from "@mui/material";
import "./App.css";
import { Outlet } from "react-router-dom";
import DownloadApp from "../src/components/downloadApp/downloadApp";
import Footer from "../src/components/footer/footer";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
