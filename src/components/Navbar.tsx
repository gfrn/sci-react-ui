// Adapted from https://github.com/DiamondLightSource/web-ui-components
import {
  Box,
  BoxProps,
  Drawer,
  LinkProps,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import { MdMenu, MdClose } from "react-icons/md";
import diamondLogo from "./public/diamondgs.png";
import React, { useState } from "react";
import { colours } from "../styles/colours";

export interface NavLinksProps {
  children: React.ReactElement<LinkProps> | React.ReactElement<LinkProps>[];
}

export interface NavbarProps extends BoxProps {
  /** Location/content of the logo */
  logo?: string | null;
  children?: React.ReactElement | React.ReactElement[];
}

const NavLink = ({ children, ...props }: LinkProps) => (
  <Link
    sx={{
      "&:hover": {
        color: colours.diamondII.s_main.light,
        borderBottom: "solid 4px",
      },
      textDecoration: "none",
      px: 2,
      height: "80%",
      bgcolor: { md: "none" },
      alignItems: "center",
      display: "flex",
      borderTop: "4px solid transparent",
      borderBottom: "4px solid transparent",
      color: colours.diamondII.p_contrastText.light,
    }}
    {...props}
  >
    {children}
  </Link>
);

const NavLinks = ({ children }: NavLinksProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <IconButton
        sx={{
          border: "none",
          color: colours.diamondII.p_contrastText.light,
          backgroundColor: "transparent",
          display: { md: "none" },
          order: -1,
          "&:hover": { color: colours.diamondII.p_main.light },
        }}
        size={"small"}
        aria-label="Open Menu"
        onClick={isOpen ? onClose : onOpen}
      >
        {isOpen ? <MdClose /> : <MdMenu />}
      </IconButton>
      <Stack
        direction="row"
        sx={{
          height: "100%",
          display: { xs: "none", md: "flex" },
        }}
        component="nav"
        spacing={4}
      >
        {children}
      </Stack>
      <Drawer open={isOpen} onClose={onClose} anchor="top">
        <Box
          sx={{
            width: "100%",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: colours.diamondII.p_main.light,
          }}
        >
          {children}
        </Box>
      </Drawer>
    </>
  );
};

/**
 * Basic navigation bar. Can be used with `NavLinks` and `NavLink` to display a responsive list of links.
 */
const Navbar = ({
  children,
  logo = diamondLogo as string,
  ...props
}: NavbarProps) => {
  return (
    <Box position="sticky" top="0" zIndex={1} width="100%" {...props}>
      <Box
        sx={{
          display: "flex",
          bgcolor: colours.diamondII.p_main.light,
          px: { xs: "1rem", md: "7.5vw" },
          height: 50,
          width: "80%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          spacing={8}
          sx={{ height: "100%", alignItems: "center", width: "100%" }}
        >
          {logo ? (
            <Link href="/">
              <Box maxWidth="5rem">
                <Box
                  component="img"
                  alt="Home"
                  src={logo}
                  sx={{
                    "&:hover": { filter: "brightness(70%)" },
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Link>
          ) : null}
          {children}
        </Stack>
      </Box>
    </Box>
  );
};

export { Navbar, NavLinks, NavLink };
