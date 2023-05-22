import { Box, Typography } from '@mui/material'

/*
 * Reusable component for all the titles(headlines) on the pages
 * By default is already set:
 * - align: center, but can be change with props, alternativa values: 'left', 'right', 'justify'
 * - variant: 'h1', alternative values: 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2'
 * -color: 'secondary', alternativa values: 'primary'
 */
interface HeadlineProps {
  variant?: any
  title?: string
  align?: any
  color?: string
  padding?: string
}

const Headline: React.FC<HeadlineProps> = ({ variant, title, align, color, padding }) => {
  return (
    <Box sx={ { width: '90%', margin:'0 auto' } }>
      <Typography
        variant={ variant ? variant : 'h1' }
        align={ align ? align : 'center' }
        color={ color ? color : 'secondary' }
        padding={padding? padding : '1rem 0.50rem'}
      >
        { title ? title : 'Title not found' }
      </Typography>
    </Box>
  )
}

export default Headline