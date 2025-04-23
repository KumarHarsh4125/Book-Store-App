import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography, Toolbar, TextField, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass search term to Books.js
  };

  return (
    <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
      <Toolbar>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          SHARMA PUSTAK BHANDAR
        </Typography>

        {/* Search Bar with Improved Transparency and Styling */}
        <Box sx={{ ml: 3, flexGrow: 1 }}>
          <TextField
            variant="outlined"
            placeholder="Search books..."
            size="small"
            value={searchTerm}
            onChange={handleSearch}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)", // Subtle transparency
              borderRadius: "20px", // Circular shape
              width: "40%",
              backdropFilter: "blur(5px)", // Soft blur effect
              "& .MuiOutlinedInput-root": {
                height: "40px",
                padding: "0px",
                border: "none", // Remove unwanted border
                "& fieldset": {
                  border: "none", // Remove fieldset border
                },
                "&:hover fieldset": {
                  border: "1px solid lightgray", // Light gray border on hover
                },
                "&.Mui-focused fieldset": {
                  border: "0px solid white", // White border on focus
                },
              },
            }}
          />
        </Box>

        <Tabs
          sx={{ ml: "auto" }}
          textColor="inherit"
          indicatorColor="secondary"
          value={value}
          onChange={(e, val) => setValue(val)}
        >
          <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
          <Tab LinkComponent={NavLink} to="/books" label="Books" />
          <Tab LinkComponent={NavLink} to="/about" label="About Us" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;