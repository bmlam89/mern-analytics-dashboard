import React, { useState } from 'react'
import FlexBetween from "@/components/FlexBetween";
import { Box, Typography } from "@mui/material"
import PixIcon from "@mui/icons-material/Pix";
import { Link } from "react-router-dom";

type Props = {}

const Navbar = (props: Props) => {
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem">
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>

      <FlexBetween gap="2rem">
        <Box>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : "grey",
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : "grey",
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar