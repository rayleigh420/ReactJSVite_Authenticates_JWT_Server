import { useEffect } from "react"
import { useState } from "react"
import axios from "../api/axios"
import useAuth from "../hooks/useAuth"
import useRefreshToken from '../hooks/useRefreshToken'

const User = () => {
    const [text, setText] = useState('')
    // const refresh = useRefreshToken()

    const { auth } = useAuth();
    console.log("auth: ", auth.accessToken)
    const accessToken = auth?.accessToken

    useEffect(() => {
        const fetch = async () => {
            try {
                let result = await axios.get('/action', {
                    headers: { token: `Bearer ${accessToken}` }
                });
                console.log(result.data)
                setText(result.data)
            } catch (e) {
                console.log(e)
            }
        }

        fetch()
    }, [])

    return (
        <>
            {text ?
                <h2>{text}</h2>
                : <h2>Nothing to display</h2>
            }
            {/* <button onClick={() => refresh()}>Refresh</button> */}
        </>
    )
}

export default User