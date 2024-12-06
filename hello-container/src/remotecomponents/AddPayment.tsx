import { useContext, useEffect, useRef } from 'react'
import {mount} from 'addpayment/AddPayment'
import { UserContext } from '../UserContext/userContext'

const AddPayment = () => {


    const addPaymentDiv = useRef<HTMLDivElement>(null)

    const userContext = useContext(UserContext)

    useEffect(() => {
      mount(addPaymentDiv.current, userContext)
    }, [userContext])

    return(<div ref={addPaymentDiv}></div>)
}

export default AddPayment