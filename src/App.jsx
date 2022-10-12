import { useState } from 'react'

import { GlobalStyle, ImageContainer, Wrapper, Button } from './styles'

import Header from './components/header'
import Footer from './components/footer'
import Modal from './components/modal';

import ModalInner from './components/modalInner'
import ImgBox from './components/imgBox'

import { matrix } from './matrix'

function App() {
  const [distance, setDistance] = useState(1)
  const [showModal, setShowModal] = useState(false)

  const easing = (num) => Math.pow(num, 3)

  const calculateDistance = ([x, y]) => {
    const center = [window.innerWidth / 2, window.innerHeight / 2]
    const maxHypot = Math.hypot(center[0], center[1])
    const hypot = Math.hypot(center[0] - x, center[1] - y)
    const distance = hypot / maxHypot

    const easeDistance = easing(distance)

    setDistance(easeDistance)
  }

  const handleMove = ({ clientX, clientY }) => {
    calculateDistance([clientX, clientY]);
  };

  const handleTouchMove = ({ touches }) => {
    calculateDistance([touches[0].clientX, touches[1].clientY]);
  };

  const toggleModal = () => {
    setShowModal((showModal) => !showModal)
  }

  return (
    <>
      <GlobalStyle />
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <ModalInner />
        </Modal>
      )}

      <Header />
      <Footer />

      <Wrapper onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
        $color={Math.round(120 - distance * 40)}>
        <ImageContainer $isTogether={distance < 0.001}>
          <Button onClick={toggleModal}>Sign up for updates</Button>
          {matrix.map(([x, y], index) => (
            <ImgBox key={index} x={x} y={y} percent={distance} />
          ))}
        </ImageContainer>
      </Wrapper>
    </>
  )
}

export default App
