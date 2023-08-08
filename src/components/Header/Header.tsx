import { ModeOfTravel } from "@mui/icons-material";
import { AppBar, Tabs, Tab, Toolbar } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const linksArr = ["Home", "Diaries", "Auth"];
const loggedLinksArr = ["Home", "Diaries", "Profile"];

const findActiveTabIndex = (
  pathname: string,
  isAuthenticated: boolean
): number => {
  const availableLinks: string[] = isAuthenticated ? loggedLinksArr : linksArr;
  const index: number = availableLinks.findIndex(
    (link) =>
      pathname.includes(link.toLowerCase()) ||
      (link.toLowerCase() === "home" && pathname === "/")
  );
  return index !== -1 ? index : 0;
};

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth0();

  const [tabsValue, setTabsValue] = useState<number>(
    useMemo(
      () => findActiveTabIndex(pathname, isAuthenticated),
      [pathname, isAuthenticated]
    )
  );

  useEffect(() => {
    setTabsValue(findActiveTabIndex(pathname, isAuthenticated));
  }, [pathname, isAuthenticated]);

  return (
    <AppBar sx={{ bgcolor: "#fff" }} position="sticky">
      <Toolbar>
        <ModeOfTravel sx={{ color: "#000" }} />
        <Tabs
          sx={{ ml: "auto", textDecoration: "none" }}
          value={tabsValue}
          onChange={(e, value) => setTabsValue(+value)}
        >
          {isAuthenticated
            ? loggedLinksArr.map((link) => (
                <Tab
                  key={link}
                  label={link}
                  component={Link}
                  to={`/${
                    link.toLowerCase() === "home" ? "" : link.toLowerCase()
                  }`}
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "18px",
                    },
                  }}
                />
              ))
            : linksArr.map((link) => (
                <Tab
                  key={link}
                  label={link}
                  component={Link}
                  to={`/${
                    link.toLowerCase() === "home" ? "" : link.toLowerCase()
                  }`}
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "18px",
                    },
                  }}
                />
              ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
