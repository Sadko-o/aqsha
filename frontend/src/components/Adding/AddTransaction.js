import Modal, {
    useModalState,
    modalAnimation
  } from "react-simple-modal-provider";
import "../../index.css";

import React, { useState,  useEffect} from 'react'
  
  export default  ({ uid, children  }) => {
    const [isOpen, setOpen] = useModalState();
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const { addDocument, response } = useState('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });
  };



    return (
      <Modal
        id={"Modal4"}
        consumer={children}
        isOpen={isOpen}
        setOpen={setOpen}
        duration={250}
        animation={modalAnimation.slideUp}
        allowClickOutside={false}
        draggable={true}
      >
        <div className="container rounded h-96 w-96 bg-white rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm" style={{width:"40vw", height:"50vh"}}>
          
          <div className="max-w mx-auto bg-white p-16">
          <form className='h-full w-full flex flex-col justify-evenly items-center'  onSubmit={handleSubmit}>
                  
                  <div className="text-black text-2xl tracking-wider">Запиши на что потратил 💰 </div>
                  <div className="form-control">
                    <label htmlFor="text">Подписка</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Название подписки" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="amount">Сумма <br />
                      (негативное - раcход, положительные - доход)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Сумма..." />
                  </div>
                  <button className="center text-center text-black bg-gradient-to-tr from-indigo-600 to-purple-600  text-white  cursor-pointer px-5 py-1 rounded-full bg-opacity-50 bg-white drop-shadow-2xl  w-full mt-4 py-2 rounded-md text-lg font-semibold" onClick={()=>addDocument({uid, name, amount})}>Добавить</button>
                  <button className="center text-center text-black bg-gradient-to-tr from-indigo-600 to-purple-600  text-white  cursor-pointer px-5 py-1 rounded-full bg-opacity-50 bg-white drop-shadow-2xl  w-full mt-4 py-2 rounded-md text-lg font-semibold" onClick={() => setOpen(false)}>Close</button>
          </form>
          </div>
        </div>
      </Modal>
    );
  };
  
 