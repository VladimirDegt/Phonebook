import {extendTheme, useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const lightTheme = extendTheme({
  colors: {
    background: "#F5F5F5",
    text: "#121212",
  },
  fonts: {
    body: `'Roboto', sans-serif`,
  },
  
});

export const darkTheme = extendTheme({
  colors: {
    background: "#121212",
    text: "#F5F5F5",
  },
  fonts: {
    body: `'Roboto', sans-serif`,
  },
});

export function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button 
    onClick={toggleColorMode}
    height='46px'
    width='46px'  
    px='0px'
    borderRadius='4px'
    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
    >
      {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
