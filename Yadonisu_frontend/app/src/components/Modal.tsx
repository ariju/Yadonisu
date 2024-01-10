import React, { useState } from 'react'
import Modal from 'react-modal'

const CustomModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel='Example Modal'>
        <h2>Modal Title</h2>
        <p>This is the content inside the modal.</p>
        <button onClick={toggleModal}>Close Modal</button>
      </Modal>
    </div>
  )
}

export default CustomModal
