
import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 className='h-full w-full flex flex-col justify-evenly items-center text-3xl font-bold'>История затрат</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}