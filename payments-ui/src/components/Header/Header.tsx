const Header = (): React.ReactElement => {
    return (
        <>
            <div style={{ width: "100%", display: "inline-flex", backgroundColor: "#cc6d62" }}>
                <div style={{ width: "50%" }}>
                    <h1>Payments Application</h1>
                </div>
                <div style={{ width: "50%", verticalAlign: "middle", display: "inline-flex" }}>
                    <button style={{ height: "50%", margin: "auto" }}>Find a Transaction</button>
                    <button style={{ height: "50%", margin: "auto" }}>New Transaction</button>
                </div>
            </div>
        </>
    )
}

export default Header