import { Transaction } from "./PaymentList/PaymentList";


export const fetchPayments = (
    setData: (transactions: Transaction[]) => void, 
    setDataLoading: (dataIsLoading: boolean) => void, 
    uri: string
) => {
    fetch(uri, {headers: {'Accept': 'application/json'}})
    .then((resp) => {
      if(!resp.ok) {
          return;
      }
      return resp.json()
    })
    .then((res) => {
      setData(res);
    })
    .catch((err) => {console.log(err)})
    .finally(() => {setDataLoading(false)})
}

export const addTransaction = (transaction: Transaction, uri: string): Promise<Response> => {
  const payload: newTransaction = {
    amount: transaction.amount,
    country: transaction.currency,
    currency: transaction.currency,
    orderId: transaction.orderId,
    taxCode: transaction.taxCode,
    taxRate: transaction.taxRate,
    type: transaction.type
  }
  console.log(payload)
  return fetch(uri, {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(payload)})
}

type newTransaction = {
  amount: number,
  country: string,
  currency: string,
  orderId: string,
  taxCode: number,
  taxRate: number,
  type: string
}