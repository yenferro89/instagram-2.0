import React from 'react'
import { useRecoilState } from 'recoil'
import { modalAtom } from '../atoms/modalAtom'

function Modal() {
  const [open, setOpen]= useRecoilState(modalAtom)

  return (
    <div>
        {open && <p> Modal open </p>}
    </div>
  )
}

export default Modal