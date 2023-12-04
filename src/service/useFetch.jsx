import { useCallback } from 'react'
import { createUrl } from '../utils/createUrl'

const url = "https://api.currencybeacon.com/v1/latest"
const key = "oM64sbLdKwuaS0llTMuZQ18gL269GSpJ"  // process.env.key

export const useFetch = () => {
    const fetchData = useCallback(async (base) => {
        let URL = createUrl(url, key, base)
        let data = await fetch(URL)
            .then((response) => response.json())
            .then((res) => {
                return res
            })
            .catch((error) => console.log(error))

        return data
    }, [])

    return { fetchData }
}
