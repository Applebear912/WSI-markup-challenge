import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs
        id="Navbar"
        value={value}
        onChange={handleChange}
        textColor="white"
        centered
      >
        <Tab label="COOKWARE" className="tab" />
        <Tab label="COOKS' TOOLS" className="tab" />
        <Tab label="CUTLERY" className="tab" />
        <Tab label="ELECTRICS" className="tab" />
        <Tab label="BAKEWARE" className="tab" />
        <Tab label="FOOD" className="tab" />
        <Tab label="TABLETOP & BAR" className="tab" />
        <Tab label="HOMEKEEPING" className="tab" />
        <Tab label="OUTDOOR" />
        <Tab label="SALE" textColor="red" className="tab" />
        <Tab label="WILLIAMS-SONOMA HOME" className="tab" />
      </Tabs>
    </Box>
  );
}
