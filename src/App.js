import "./App.css";
import Navbar from "./Navbar.js";
import Grid from "@material-ui/core/Grid";
import BreadcrumbList from "./BreadcrumbList.js";
import ImgGallery from "./ImgGallery.js";
import ProductDetail from "./ProductDetail.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"images/logo.png"} className="App-logo" alt="logo" />
        <Navbar />
        <BreadcrumbList />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ImgGallery />
          </Grid>
          <Grid item xs={6}>
            <ProductDetail />
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
