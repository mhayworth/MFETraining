const Greeting = ({name: userName, age: greetingAge, message}: GreetingPropsType): React.ReactElement => {
    return (
        <p>
            Hello {userName}, you are {greetingAge} years old! {message ? message : "no message for now"}
        </p>
    )
}

type GreetingPropsType = {
    name: string,
    age: number,
    message?: string
}

export default Greeting