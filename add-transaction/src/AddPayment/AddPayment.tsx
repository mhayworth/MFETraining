import { useReducer, useState } from "react";
import { addTransaction, Transaction } from "../DataFetch";
import { UserLoginType } from "../types/UserLoginType";

const AddPayment = ({name}: UserLoginType): React.ReactElement => {
    const reducer = (state : Transaction, data : { field: string; value: unknown }) => {
        return {...state, [data.field]: data.value}
    }
    const [newTransaction, dispatch] = useReducer(reducer, {id: NaN, amount: NaN, country: "", currency: "", date: "", orderId: "", taxCode: NaN, taxRate: NaN, type: "",})
    const [transactionSuccess, setTransactionSuccess] = useState<boolean>(false);

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        addTransaction(newTransaction, "https://paymentsdemo.neueda.com/api/payment")
        .then((resp: Response) => {
            if (resp.ok) {
                setTransactionSuccess(true);
            }
        })
        .catch((err) => console.log(err));
    }

    return (
        <>
        {transactionSuccess && <div style={{border:"1px solid green", color:"green"}}>Successfully submitted new transaction {name}!</div>}
        <form onSubmit={handleSubmit}>            
            <label htmlFor="amount-input">Amount:</label>
            <input id="amount-input" type="number" required={true} onChange={(event) => dispatch({field: "amount", value: event.target.value})}/>
            <br />

            <label htmlFor="country-input">Country:</label>
            <input id="country-input" type="text" required={true} onChange={(event) => dispatch({field: "country", value: event.target.value})}/>
            <br />

            <label htmlFor="currency-input">Currency:</label>
            <input id="currency-input" type="text" required={true} onChange={(event) => dispatch({field: "currency", value: event.target.value})}/>
            <br />

            <label htmlFor="order-id-input">Order ID:</label>
            <input id="order-id-input" type="text" required={true} onChange={(event) => dispatch({field: "orderId", value: event.target.value})}/>
            <br />

            <label htmlFor="tax-code-input">Tax Code:</label>
            <input id="tax-code-input" type="number" required={true} onChange={(event) => dispatch({field: "taxCode", value: event.target.value})}/>
            <br />

            <label htmlFor="tax-rate-input">Tax Rate:</label>
            <input id="tax-rate-input" type="number" required={true} onChange={(event) => dispatch({field: "taxRate", value: event.target.value})}/>
            <br />

            <label htmlFor="type-input">Type:</label>
            <input id="type-input" type="text" required={true} onChange={(event) => dispatch({field: "type", value: event.target.value})}/>
            <br />

            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default AddPayment