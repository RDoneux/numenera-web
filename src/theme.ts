import { extendTheme } from '@mui/joy/styles'

const theme = extendTheme({
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.disabled && {
            backgroundColor: 'var(--joy-palette-neutral-700) !important',
            color: 'var(--joy-palette-neutral-plainColor) !important',
            opacity: 0.7,
          }),
        }),
      },
    },
  },
})

export default theme
