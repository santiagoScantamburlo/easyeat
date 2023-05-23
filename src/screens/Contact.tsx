import { Box } from '@mui/material'
import './Contact.css'
import Headline from '../components/atom/Headline'
import ContactForm from '../components/molecule/contact/ContactForm'

const Contact = () => {
  return (
    <section className="contact-us">
      <Box style={styles.body}>
        <Headline title='CONTACT US' variant='h2' color='#000'/>
        <ContactForm />
      </Box>
    </section>
  )
}

export default Contact

const styles = {
  body: {
    width: '95%',
    minWidth: '80%',
    margin: 'auto'
  }
}