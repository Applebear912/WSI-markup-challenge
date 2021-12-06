import logo from "./logo.png";
import "./App.css";
import Navbar from "./Navbar.js";
import Grid from "@material-ui/core/Grid";
import BreadcrumbList from "./BreadcrumbList.js";
import ImgGallary from "./ImgGallary.js";
import ProductDetail from "./ProductDetail.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
        <BreadcrumbList />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ImgGallary />
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
