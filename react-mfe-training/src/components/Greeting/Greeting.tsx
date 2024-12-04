import { useState } from "react";

const Greeting = ({name: userName, age: greetingAge, message}: GreetingPropsType): React.ReactElement => {
    const [name, setName] = useState<string>(userName);
    return (
        <>
            <button onClick={() => setName("James")}>Change name</button>
            <p>
                Hello {name}, you are {greetingAge} years old! {message ? message : "no message for now"}
            </p>
        </>
    )
}

type GreetingPropsType = {
    name: string,
    age: number,
    message?: string
}

export default Greeting