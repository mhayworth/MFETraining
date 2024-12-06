import { useEffect, useRef, useState } from 'react'
import {mount} from 'paymentlist/PaymentList'
import { useNavigate } from 'react-router-dom'

const PaymentList = (userSearch: UserSearchProps) => {

  const navigate = useNavigate();
  const [userNavigate, setUserNavigate] = useState<string>("")
  useEffect(() => {
    console.log(userNavigate)
  }, [navigate, userNavigate])
  

    const paymentListDiv = useRef<HTMLDivElement>(null)

    useEffect(() => {
      mount(paymentListDiv.current, {...userSearch, navigate: ((url: string) => {setUserNavigate(url)})})
    }, [navigate, userSearch])

    return(<div ref={paymentListDiv}></div>)
}

export type UserSearchProps = {
  search: string,
  setSearch: (search: string) => void,
  country: string,
  setCountry: (country: string) => void,
}

export default PaymentList