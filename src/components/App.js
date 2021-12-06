import "./App.css";
import Grid from "@material-ui/core/Grid";

import Navbar from "./Navbar.js";
import BreadcrumbList from "./BreadcrumbList.js";
import ImgGallery from "./ImgGallery.js";
import ProductDetail from "./ProductDetail.js";
import Divider from "@mui/material/Divider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"images/logo.png"} className="App-logo" alt="logo" />
      </header>
      <nav>
        <Navbar />
      </nav>
      <section>
        <BreadcrumbList />
      </section>
      <article>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={6}>
            <ImgGallery />
          </Grid>
          <Grid item xs={6}>
            <ProductDetail />
          </Grid>
        </Grid>
      </article>
      <footer>
        <Divider />
        <p>
          <span>&#174;</span>
          2018 Williams-Sonoma Inc.,<b> All Rights Reserved </b> |{" "}
          <b>Terms and Conditions</b> ( Updated March 2016) |{" "}
          <b>Privacy Policy</b> | <b>Leagal Statement</b>
        </p>
      </footer>
    </div>
  );
}

export default App;
