import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useToggle } from 'react-use';
import TemporaryDrawer from "./TemporaryDrawer";
import DrawerLinks from "./DrawerLinks";
import { Box, Container } from "@mui/material";
import PermanentDrawer from "./PermanentDrawer";

function Layout({ children }) {
  const [isTemporaryDrawerOpen, toggleTemporaryDrawer] = useToggle(false);
  const [isPersistentDrawerOpen, togglePersistentDrawer] = useToggle(false);

  return (
    <>
      <Header
        setTemporaryDrawerOpen={toggleTemporaryDrawer}
        setPersistentDrawerOpen={togglePersistentDrawer}
        isPersistentDrawerOpen={isPersistentDrawerOpen}
      />
      <TemporaryDrawer
        setIsOpen={toggleTemporaryDrawer}
        isOpen={isTemporaryDrawerOpen}
      >
        <DrawerLinks setIsOpen={toggleTemporaryDrawer} />
      </TemporaryDrawer>
      <Box display="flex" overflow="hidden">
        <PermanentDrawer isOpen={isPersistentDrawerOpen}>
          <DrawerLinks />
        </PermanentDrawer>
        <Container style={{ maxWidth: isPersistentDrawerOpen ? "80%" : "100%"}}>
          <Box p={3}>
            {children}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}


export default Layout;
