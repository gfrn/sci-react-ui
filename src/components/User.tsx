// Adapted from https://github.com/DiamondLightSource/web-ui-components
import { Avatar, Box, Link, Stack, Typography } from "@mui/material";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "../styles/components";
import { useState } from "react";

import { MdLogin } from "react-icons/md";
import { colours } from "../styles/colours";

export interface AuthState {
  fedid: string;
  name: string;
}

export interface UserProps {
  user: AuthState | null;
  onLogin?: () => void;
  onLogout?: () => void;
}

export const User = ({ user, onLogin, onLogout }: UserProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box flexGrow={1} />
      {user ? (
        <>
          <Button
            aria-label="User Avatar"
            onClick={handleClick}
            customVariant="link"
            sx={{
              border: "none",
              cursor: "pointer",
              minWidth: 0,
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            <Stack direction="row" alignItems="center">
              <div style={{ padding: 10 }}>
                <Typography
                  color={ colours.diamondII.p_contrastText.light }
                  display="inline-block"
                  textTransform="none"
                >
                  {user.name}
                </Typography>
                <Typography
                  textAlign="left"
                  color={ colours.diamondII.p_contrastText.light }
                  fontSize="0.75rem"
                  textTransform="none"
                >
                  {user.fedid}
                </Typography>
              </div>
              <Avatar sx={{ height: 24, width: 24 }} />
            </Stack>
          </Button>
          <Menu
            id="menu-list"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={onLogout} aria-label="Logout">
              <Link sx={{ textDecoration: "none" }}>Logout</Link>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          onClick={onLogin}
          startIcon={<MdLogin />}
          customVariant="onBlue"
        >
          Login
        </Button>
      )}
    </>
  );
};
