import Breadcrumb from '@/common/Breadcrumb'
import Heading from '@/common/Heading'
import '@/styles/components/Newsletter.scss'
const Newsletter = () => {
  return (
    <div className='newsletter'>
      <Breadcrumb text='Newsletter'/>
      <Heading text='Suscribete' />
      <p>Y entérate de todas las novedades</p>
      <div className='container'></div>
    </div>
  )
}

export default Newsletter