import { Link } from 'react-router-dom'
import { Button, Grid } from '@mui/material'
import './DiscoverSection.css'
import Headline from '../../atom/Headline'
import { publicRoutes } from '../../../router/PublicRoute'

const DiscoverSection = () => {
  return (
    <section className="discover">
      <Grid container sx={ { position: 'relative', zIndex: '2', maxWidth: '500px', justifyContent: 'center', margin: '0 auto' } }>
        <Grid item xs={ 12 }>
          <Headline title='Explore all our recipes' color='white' />
        </Grid>
        <Grid item xs={ 12 }>
          <Headline
            title='Discover all EasyEat® has to offer, with over 70,000 triple-tested recipes all with innovative Guided Cooking functionality'
            color='white'
            variant='h2'
          />
        </Grid>
        <Grid item >
          <Link to={ publicRoutes.SEARCH }><Button variant='contained'>Discover</Button></Link></Grid>
      </Grid>
    </section>
  )
}

export default DiscoverSection