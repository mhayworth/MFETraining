import { useEffect, useState } from "react";
import './UserSearch.css'
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const UserSearch = ({ country, setCountry, setSearch, search }: UserSearchNavigateProps): React.ReactElement => {
    const [countryIsLoading, setCountryIsLoading] = useState<boolean>(true)
    const [searchInput, setSearchInput] = useState<string>(search);
    const [countries, setCountries] = useState<string[]>([]);
    const [searchTouched, setSearchTouched] = useState<boolean>(false);

    const searchId = useParams<{searchTerm: string}>()
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://paymentsdemo.neueda.com/api/country", {headers: {'Accept': 'application/json'}})
        .then((resp) => {
            if(!resp.ok) {
                return;
            }
            return resp.json()
        })
        .then((res) => {
            setCountries(res);
        })
        .catch((err) => {console.log(err)})
        .finally(() => {setCountryIsLoading(false)})
    }, [])

    useEffect(() => {
        if (searchId.searchTerm) {
            setSearch(String(searchId.searchTerm));
        }
        if (searchParams.get("country")) {
            setCountry(searchParams.get("country")!);
        }
        else {
            console.log(searchParams);
            
        }
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchInput(event.target.value);
        setSearchTouched(true);
    }

    
    return (
        <>
            <div style={{ padding: "1em", display: "inline-flex" }}>
                <form onSubmit = {(event) => {event.preventDefault(); setSearch(searchInput); navigate(`/${searchInput}?${searchParams.toString()}`)}}>
                    <p style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "0.75em", marginRight: "0.75em" }}>Order ID:</p>
                    <input value={searchInput} required={true} type="text" id="order-id-input" className={(searchTouched && (searchInput.includes(" ")))?"input-error":""} style={{ padding: "0.25em" }} onChange={(event) => handleChange(event)} onKeyDown={(event) => { if (event.key === 'Enter') { setSearch(searchInput); navigate(`${searchInput}${searchParams.toString()}`);} }} />
                    <button style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "0.75em", marginRight: "0.75em" }} type="submit" disabled={(searchTouched && (!(searchInput.length > 0) || searchInput.includes(" ")))?true:false}>Search</button>
                </form>
            </div>
            {!countryIsLoading && 
            <div style={{padding: "1em"}}>
                Country: 
            <select id="dropdown" value={country} onChange={(e) => {setCountry(e.target.value); setSearchParams({country: e.target.value})}} >
                <option>Select</option>
                {countries.map((c) => {return <option key={c} value={c}>{c}</option>})}
            </select> 
            </div>
            }

        </>
    )
}

export type UserSearchNavigateProps = {
    search: string,
    setSearch: (search: string) => void,
    country: string,
    setCountry: (country: string) => void,
    navigate: (url: string) => void
}

export default UserSearch