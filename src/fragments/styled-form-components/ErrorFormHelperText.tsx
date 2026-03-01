import { FormHelperText } from '@mui/joy'

interface ErrorFormHelperText {
  value: string | undefined
}

export default function ErrorFormHelperText({ value }: ErrorFormHelperText) {
  return (
    value && (
      <FormHelperText sx={{ color: 'var(--joy-palette-danger-plainColor)' }}>
        {value}
      </FormHelperText>
    )
  )
}
