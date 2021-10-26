import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

export const breakpoints = createBreakpoints({
  sm: "320px",
  xd: "520px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
})

export const theme = extendTheme({
    color: {
        gray50: '#F7FAFC',
        gray100: '#EDF2F7',
        gray200: '#E2E8F0',
        gray300: '#CBD5E0',
        gray400: '#A0AEC0',
        gray500: '#718096',
        gray600: '#4A5568',
        gray700: '#2D3748',
        gray800: '#1A202C',
        gray900: '#171923',
    },

    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    
    styles: {
        global: {
            body: {
                bg: 'gray.800',
                color: 'gray.100',
                fontSize: "1rem"
            },
        }
    }
})