import { useState } from "react";

const UserSearch = ({ setSearch }: UserSearchProps): React.ReactElement => {
    const [searchInput, setSearchInput] = useState<string>("");
    return (
        <div style={{ padding: "1em", display: "inline-flex" }}>
            <p style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "0.75em", marginRight: "0.75em" }}>Order ID:</p>
            <input type="text" style={{ padding: "0.25em" }} onChange={(event) => setSearchInput(event.target.value)} onKeyDown={(event) => {if (event.key === 'Enter') {setSearch(searchInput)}}}/>
            <button style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "0.75em", marginRight: "0.75em" }} onClick={() => setSearch(searchInput)}>Search</button>
        </div>
    )
}

export type UserSearchProps = {
    search: string,
    setSearch: (search: string) => void
}

export default UserSearch