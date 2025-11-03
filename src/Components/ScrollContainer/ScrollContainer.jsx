import { useRef, useState, useEffect } from "react";
import { IconButton, Box, Stack } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function ScrollContainer({ children }) {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    const updateArrows = () => {
      if (!el) return;
      setShowLeft(Math.abs(el.scrollLeft) < el.scrollWidth - el.clientWidth - 10);
      setShowRight(el.scrollLeft < -10);
    };

    setTimeout(updateArrows, 50);

    if (el) {
      el.addEventListener("scroll", updateArrows);
      window.addEventListener("resize", updateArrows);
    }

    return () => {
      if (el) el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [children]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 150 : -150,
        behavior: "smooth",
      });
      console.log("Scrollby");
    }
    console.log("Scroll");
  };

  return (
    <Box position="relative" sx={{ width: "100%", mb: 6, display: "flex", justifyContent: "center"}}>
      {showRight && (
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            right: -10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "#e3c78acc",
          boxShadow: "0 4px 8px rgba(227, 199, 138, 0.4), 0 0 6px rgba(227, 199, 138, 0.6)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#e3c78a49",
            boxShadow: "0 6px 12px rgba(227, 199, 138, 0.6), 0 0 8px rgba(227, 199, 138, 0.8)",
                }}}
        >
          <ChevronRight sx={(theme) => ({color: theme.palette.coffeePalette.dark.main})}/>
        </IconButton>
      )}

      <Stack
        direction="row"
        ref={scrollRef}
        sx={{
          direction: "rtl",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {children}
      </Stack>

      {showLeft && ( 
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            left: -10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "#e3c78acc",
            boxShadow: "0 4px 8px rgba(227, 199, 138, 0.4), 0 0 6px rgba(227, 199, 138, 0.6)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#e3c78a49",
            boxShadow: "0 6px 12px rgba(227, 199, 138, 0.6), 0 0 8px rgba(227, 199, 138, 0.8)",
                }}}
        >
          <ChevronLeft sx={(theme) => ({color: theme.palette.coffeePalette.dark.main})}/>
        </IconButton>
      )}
    </Box>
  );
}
