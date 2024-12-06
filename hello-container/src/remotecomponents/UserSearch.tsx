import { useEffect, useRef, useState } from 'react'
import {mount} from 'paymentlist/UserSearch'
import { UserSearchProps} from './PaymentList'
import { useNavigate } from 'react-router-dom'

const UserSearch = (userSearch: UserSearchProps) => {

  const navigate = useNavigate();
  const [userNavigate, setUserNavigate] = useState<string>("")
  useEffect(() => {
    console.log(userNavigate)
  }, [navigate, userNavigate])
  

    const userSearchDiv = useRef<HTMLDivElement>(null)

    useEffect(() => {
      mount(userSearchDiv.current, {...userSearch, navigate: ((url: string) => {setUserNavigate(url)})})
    }, [navigate, userSearch])

    return(<div ref={userSearchDiv}></div>)
}

export default UserSearch