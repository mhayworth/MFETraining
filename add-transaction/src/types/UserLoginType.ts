export type UserLoginType = {
    id: number,
    name: string,
    role: string,
    login: (id: number, name: string, role: string) => void,
    logout: () => void
}