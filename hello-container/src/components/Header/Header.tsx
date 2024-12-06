import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext/userContext'

const Header = (): React.ReactElement => {
    const userContext = useContext(UserContext);

    return (
        <>
            <div style={{ width: "100%", display: "inline-flex", backgroundColor: "#cc6d62" }}>
                <div style={{ width: "50%" }}>
                    <h1>{userContext.id !== 0 ? `Welcome ${userContext.name}`:"Payments Application"}</h1>
                </div>
                <div style={{ width: "50%", verticalAlign: "middle", display: "inline-flex" }}>
                    <div style={{ height: "50%", margin: "auto" }}>
                        <Link to="/find">
                            <button style={{ height: "100%" }}>Find a Transaction</button>
                        </Link>
                    </div>
                    <div style={{ height: "50%", margin: "auto" }}>
                        <Link to="/add">
                            <button style={{ height: "100%" }}>New Transaction</button>
                        </Link>
                    </div>
                    { userContext.id === 0 ?
                    <div style={{ height: "50%", margin: "auto" }}>
                        <button style={{ height: "100%" }} onClick={() => userContext.login(1, "Michael", "Admin")}>Login</button>
                    </div>
                    :
                    <div style={{ height: "50%", margin: "auto" }}>
                    <button style={{ height: "100%" }} onClick={userContext.logout}>Log out</button>
                </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Header