import './header.css'
import { useFetch } from '../../service/useFetch'
import { useEffect } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentCurrency } from '../../redux/currency/reducer'

const Header = () => {
    const { fetchData } = useFetch()
    const currency = useSelector((state) => state.currency.currentCurrency)
    const dispatch = useDispatch()

    useEffect(() => {
        const func = async () => {
            // set up bases to avoid fetching api each base change
            await fetchData('USD').then((value) => dispatch(setCurrentCurrency(value)))
            await fetchData('EUR').then((value) => dispatch(setCurrentCurrency(value)))
            await fetchData('UAH').then((value) => dispatch(setCurrentCurrency(value)))
        }
        func()
    }, [fetchData,dispatch])

    return (
        <div className="header-wrap">
            <div className="header-container">
                <div className="header-logo">Currency changer</div>
                <div className="header-box">
                    <div className="header-currency">
                        1 USD = UAH {currency.USD?.rates?.['UAH']}
                    </div>

                    <div className="header-currency">
                        1 EUR = UAH {currency.EUR?.rates?.['UAH']}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Header)
