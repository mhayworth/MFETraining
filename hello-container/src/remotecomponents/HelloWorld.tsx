import { useEffect, useRef } from 'react'
import {mount} from 'paymentlist/HelloWorld'

const HelloWorld = () => {


    const helloWorldDiv = useRef<HTMLDivElement>(null)

    useEffect(() => {
      mount(helloWorldDiv.current)
    }, [])

    return(<div ref={helloWorldDiv}></div>)
}

export default HelloWorld