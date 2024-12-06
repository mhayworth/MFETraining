import { createContext, ReactNode, useState } from "react"

export const UserContext = createContext<UserLoginType>({id: 0, name: "", role: "", login: () => {}, logout: () => {}})

type UserProviderProps = {
    children: ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [role, setRole] = useState<string>("");

    const login = (id: number, name: string, role:string) => {
        setId(id);
        setName(name);
        setRole(role);
    }

    const logout = () => {
        setId(0);
        setName("");
        setRole("");
    }

    return (
        <UserContext.Provider value={{ id: id, name: name, role: role, login: login, logout: logout }}>
            {children}
        </UserContext.Provider>
    )
}

export type UserLoginType = {
    id: number,
    name: string,
    role: string,
    login: (id: number, name: string, role: string) => void,
    logout: () => void
}