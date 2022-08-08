import { Button } from '@material-tailwind/react'
import React from 'react'

import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { useModal } from "react-simple-modal-provider";

function AddButton() {
  const { open: openModal4 } = useModal("Modal4");
  
  return (
    <div>
        <Button className='btn' onClick={openModal4}>
            <Add/>
        </Button>
    </div>
  )
}

export default AddButton