import { Box, Typography } from "@mui/material"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      <Box sx={ { padding: '2rem 1rem' } }>
        <Typography>
          &copy;  Copyright { year } - All rights reserved
        </Typography>
      </Box>
    </footer >
  )
}

export default Footer
