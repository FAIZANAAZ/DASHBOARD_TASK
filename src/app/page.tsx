"use client"

import { useState } from "react"
import { AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import { MenuIcon } from "lucide-react"
import Sidebar from "@/components/ECOMMERCE/SEPERATE/sidbar"
import ECommerce from "@/components/ECOMMERCE/COMPLETE/completeall"

const drawerWidth = 240

export default function Home() {
  
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* App Bar - only visible on mobile */}
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            display: { md: "none" },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              E-Commerce Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Sidebar - permanent on desktop, drawer on mobile */}
        <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
          {/* Mobile drawer */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, overflowX: "hidden" },
            }}
          >
            <Box sx={{ width: "100%", overflowX: "hidden" }}>
              <Sidebar />
            </Box>
          </Drawer>

          {/* Desktop permanent drawer */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, overflowX: "hidden" },
            }}
            open
          >
            <Box sx={{ width: "100%", overflowX: "hidden" }}>
              <Sidebar />
            </Box>
          </Drawer>
        </Box>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
            mt: { xs: "64px", md: 0 }, // Add margin-top on mobile for the AppBar
          }}
        >
          <ECommerce />
        </Box>
      </Box>
    </>
  )
}
