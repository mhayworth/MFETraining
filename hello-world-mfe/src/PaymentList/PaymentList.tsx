import { useEffect, useState } from "react";

import { fetchPayments } from "../DataFetch";
import { UserSearchNavigateProps } from "../UserSearch/UserSearch";

const PaymentList = ({ country, search }: UserSearchNavigateProps): React.ReactElement => {

  const [dataLoading, setDataLoading] = useState<boolean>(true)
  const [data, setData] = useState<Transaction[]>([])

  useEffect(() => {
    const url: string = "https://paymentsdemo.neueda.com/api/payment";
    const params  = new URLSearchParams();
    if (country != "" && country != "all" && country != "Select") {
      params.append("country", country);
    }
    else {
      setData([]);
      setDataLoading(true)
      return
    }

    fetchPayments(setData, setDataLoading, `${url}?${params.toString()}`)
    
  }, [country])

  return (
    <>
      <div>
      {!dataLoading &&
        <table style={{ marginLeft: "auto", marginRight: "auto", border: "1px solid" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Country</th>
              <th>Currency</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {data.filter((txn) => (txn.country === country || country.length === 0 || country === 'all') && (search.length === 0 || txn.id.toString().substring(0, search.length) === search)).map((txn) => <tr key={txn.id}>
              <td>{txn.id}</td>
              <td>{txn.date}</td>
              <td>{txn.country}</td>
              <td>{txn.currency}</td>
              <td>{txn.amount}</td>
            </tr>)}
          </tbody>

        </table>
        }
      </div>
    </>
  )
}

export default PaymentList

export type Transaction = {
  id: number;
  amount: number;
  country: string;
  currency: string;
  date: string;
  orderId: string;
  taxCode: number;
  taxRate: number;
  type: string;
};