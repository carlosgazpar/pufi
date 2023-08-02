import '../styles/common/Button.scss'

const Button = ({ text, link }) => {
  return (
    <a className='button' href={link}>
    {text}
  </a>
  )
}

export default Button