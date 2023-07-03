import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Box } from '@mui/material'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      {viteLogo}
    </Box>
  )
}