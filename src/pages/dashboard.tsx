import { useState } from 'react'
import api from '../api/axios'
import type { AxiosResponse } from 'axios'
import CharacterList from '../fragments/character-list/CharacterList'
import { Stack } from '@mui/joy'
import CharacterOverview from '../fragments/character-overview/CharacterOverview'
import type { Character } from '../types/character'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const [selectedCharacter, setSelectedCharacter] = useState<
    Character | undefined
  >()

  const handleCharacterSelected = async (id: string) => {
    const character: AxiosResponse<Character> = await api.get(
      `/protected/character/${id}`,
    )
    setSelectedCharacter(character.data)
  }

  return (
    <Stack
      className="w-full p-5 items-stretch max-h-screen"
      direction="row"
      spacing={10}
    >
      <motion.div
        style={{ minWidth: 0, minHeight: 0, height: '100%', display: 'flex' }}
        animate={{ width: selectedCharacter ? '30%' : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <CharacterList onCharacterSelected={handleCharacterSelected} />
      </motion.div>
      <motion.div
        className="h-full max-h-full"
        style={{ minWidth: 0 }}
        animate={{
          width: selectedCharacter ? '70%' : '0%',
          opacity: selectedCharacter ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {selectedCharacter && (
          <CharacterOverview character={selectedCharacter} />
        )}
      </motion.div>
    </Stack>
  )
}
