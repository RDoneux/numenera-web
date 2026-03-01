import { Box, Typography, Button } from '@mui/joy'

export default function CharacterListNoResults() {
  return (
    <tr>
      <td colSpan={4} className="text-center items-center">
        <Box className="flex align-center justify-center">
          <div className="flex flex-col !p-3 w-60 gap-3">
            <Typography>No characters found</Typography>
            <Button>Create a Character</Button>
          </div>
        </Box>
      </td>
    </tr>
  )
}
