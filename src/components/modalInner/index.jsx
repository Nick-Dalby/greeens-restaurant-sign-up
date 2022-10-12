import { Container, H3, P, Socials, H4, SuccessContainer } from './styles'
import Form from '../form'
import { useState } from 'react'

import { ReactComponent as Happy } from './happy_face.svg';
import { ReactComponent as Instagram } from './icon_instagram.svg';
import { ReactComponent as Facebook } from './icon_facebook.svg';
import { ReactComponent as Twitter } from './icon_twitter.svg';

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSuccess = () => {
    setShowSuccess(true)
  }

  return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />
}
export default ModalInner

const Success = () => (
  <SuccessContainer>
    <Happy />
    <H4>Thank you!</H4>
    <P>
      We're excited to get started and can't wait for you to join us! In the meantime you can follow us on social media to
      keep up to do date:
    </P>
    <Socials>
      <Instagram />
      <Twitter />
      <Facebook />
    </Socials>
  </SuccessContainer>
)

const Input = ({ handleSuccess }) => (
  <Container>
    <H3>Sign Up</H3>
    <P>
      Keep up to date with our progress and be in with the chance of joining us on opening night!
    </P>

    <Form handleSuccess={handleSuccess} />
  </Container>
)
