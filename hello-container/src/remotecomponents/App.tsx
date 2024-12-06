import { useEffect, useRef } from 'react'
import {mount} from 'paymentlist/App'

const AppMod = () => {


    const addPaymentDiv = useRef<HTMLDivElement>(null)

    useEffect(() => {
      mount(addPaymentDiv.current)
    }, [])

    return(<div ref={addPaymentDiv}></div>)
}

export default AppMod