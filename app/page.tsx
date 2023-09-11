"use client";
import * as React from "react";
import { useState, useRef, useEffect } from 'react';
import Canvas from "./components/canvas";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  ThemeProvider
} from "@mui/material/";
import { blueGrey } from "@mui/material/colors";
import styles from "./page.module.css";
import { theme } from "./components/theme";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const primary_color = theme.palette.primary;
  // setState for responsive frontend to any backend calls
  const [tempMsg, settempMsg] = useState("");
  const updateTempMsg = (newMsg: React.SetStateAction<string>) => {
    settempMsg(newMsg);
  };
  
  return (
    <ThemeProvider theme={theme}>
      {/* TODO: maybe refactor stylings to css module */}
      <Box
        sx={{ width: "98%", height: "100%" }}
        margin={"1%"}
        justifyContent="center"
      >
        <Stack
          spacing={3}
          sx={{ height: "95%" }}
          padding={1}
          justifyContent="center"
        >
          <Paper sx={{ backgroundColor: primary_color.light }} elevation={10}>
            <Typography variant="h2" margin={2} className={styles.heading}>
              ECS 170 Optical Character Recognition Demo
            </Typography>
          </Paper>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ height: "100%" }}
            justifyContent="center"
          >
            <Canvas xs={320} sm={400} tempMsg = {tempMsg} updateTempMsg = {updateTempMsg} />
            <Paper
              sx={{
                backgroundColor: primary_color.light,
                height: "100%",
                padding: { xs: 0, sm: 2 },
                width: { xs: "98%", sm: "50%" }
              }}
              elevation={5}
            >
              <div
                style={
                  isMobile
                    ? {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                      }
                    : {}
                }
              >
                <h1>
                Predicted word:
                </h1>
                <Typography variant="h5" sx={{ margin: "10px" }}>
                  {/* Temporary message for now, reacts to backend responses */}
                  {tempMsg}
                </Typography>
              </div>
            </Paper>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
