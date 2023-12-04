import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import './changer.css'
import { multiplicationCalc } from '../../utils/multiplicationCalc'

export const Changer = () => {
    const { register, handleSubmit, setValue, getValues } = useForm()

    const [leftBase, setLeftBase] = useState()
    const [rightBase, setRightBase] = useState()

    const currency = useSelector((state) => state.currency.currentCurrency)

    const onChange = (data) => console.log(data)

    const onLeftInputChange = async (data)  => {
        let mult = 1
        if (leftBase) {
            mult = multiplicationCalc(leftBase, 'left', getValues)
        } else {
            let base = currency["USD"]
            setLeftBase(base)
        }

        setValue('right-input', '' + +data.target.value * mult)
    }

    const onLeftSelectChange = async (data ) => {
        let base = currency[data.target.value]
        setLeftBase(base)

        let multiplicator = 1
        let leftInputValue = +getValues('left-input') || 0
        let rightSelectValue = getValues('right-select') || 'USD'

        if (data.target.value !== rightSelectValue) {
            multiplicator = base.rates?.[rightSelectValue]
        }

        setValue('right-input', '' + leftInputValue * multiplicator)
    }

    const onRightInputChange = async ( data ) => {
        let mult = 1
        if (rightBase) {
            mult = multiplicationCalc(rightBase, 'right', getValues)
        } else {
            let base = currency["USD"]
            setRightBase(base)
        }

        setValue('left-input', '' + +data.target.value * mult)
    }

    const onRightSelectChange = async ( data ) => {
        let base = currency[data.target.value]
        setRightBase(base)

        let multiplicator = 1
        let rightInputValue = +getValues('right-input') || 0
        let leftSelectValue = getValues('left-select') || 'USD'

        if (data.target.value !== leftSelectValue) {
            multiplicator = base.rates?.[leftSelectValue]
        }

        setValue('left-input', '' + rightInputValue * multiplicator)
    }

    return (
        <form onChange={handleSubmit(onChange)}>
            <div className="converter-wrap">
                <div className="converter-container">
                    <div className="converter-selection">
                        <div className="converter-block">
                            <p className="converter-text">You have</p>
                            <input
                                {...register('left-input')}
                                onInput={onLeftInputChange}
                                type="text"
                                className="converter-input"
                            />
                            <select
                                {...register('left-select')}
                                onChange={onLeftSelectChange}
                                className="converter-select"
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="UAH">UAH</option>
                            </select>
                        </div>

                        <div className="converter-block">
                            <p className="converter-text">You get</p>
                            <input
                                {...register('right-input')}
                                onInput={onRightInputChange}
                                type="text"
                                className="converter-input"
                            />
                            <select
                                className="converter-select"
                                {...register('right-select')}
                                onChange={onRightSelectChange}
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="UAH">UAH</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default React.memo(Changer)
