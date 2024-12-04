import { UserSearchProps } from "../UserSearch/UserSearch";

const TransactionsTable = ({ search }: UserSearchProps): React.ReactElement => {

  const data: Transaction[] = [
    {
      id: 139235,
      amount: 60,
      country: "usa",
      currency: "usd",
      date: "2018-12-30",
      orderId: "21213627",
      taxCode: 0,
      taxRate: 0,
      type: "VISA",
    },
    {
      id: 139236,
      amount: 35,
      country: "usa",
      currency: "usd",
      date: "2018-12-30",
      orderId: "21213448",
      taxCode: 0,
      taxRate: 0,
      type: "VISA",
    },
  ];

  return (
    <>
      <div>
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
            {data.filter((txn) => search.length === 0 || txn.id.toString().substring(0, search.length) === search).map((txn) => <tr key={txn.id}>
              <td>{txn.id}</td>
              <td>{txn.date}</td>
              <td>{txn.country}</td>
              <td>{txn.currency}</td>
              <td>{txn.amount}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TransactionsTable

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