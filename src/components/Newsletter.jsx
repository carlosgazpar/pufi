import Breadcrumb from '@/common/Breadcrumb'
import Heading from '@/common/Heading'
import '@/styles/components/Newsletter.scss'
import NewsletterForm from './NewsletterForm'
const Newsletter = () => {
  return (
    <div className='newsletter'>
      <Breadcrumb text='Newsletter'/>
      <Heading text='Suscribete' />
      <p>Y entérate de todas las novedades</p>
      <div className='container'>
        <NewsletterForm />
      </div>
    </div>
  )
}

export default Newsletter