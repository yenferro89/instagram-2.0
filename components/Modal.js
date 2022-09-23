import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { useRecoilState } from 'recoil'
import { modalAtom } from '../atoms/modalAtom'

function Modal() {
  const [open, setOpen]= useRecoilState(modalAtom)

  return (
    <Transition.Root show={open} as={Fragment}>
        <Dialog
            as='div'
            className='fixed z-10 inset-0 overflow-y-auto'
            onClose={setOpen}
        >
            <h1> Hello Dialoguete</h1>
        </Dialog>    
    </Transition.Root>
  )
}

export default Modal