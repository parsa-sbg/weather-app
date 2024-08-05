import './SearchInput.css'
import React, { useEffect, useState } from 'react'
import { useWeather } from '../../hooks/useWeather';
import { CiSearch } from "react-icons/ci";
import {citiesNames} from '../../assests/datas/citiesName' 

export default function SearchInput() {
    const [cityname, setCityName] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [suggestedCities, setSuggestedCities] = useState([])
    const { fetchWeather } = useWeather()

    const allCities = citiesNames
    
    useEffect(() => {
        fetchWeather(cityname)
        setInputValue('')
        setSuggestedCities([])
    }, [cityname])

    useEffect(() => {
        suggestedCitiesGenerator()
    }, [inputValue])

    const inputChangeHandler = async (e) => {
        setInputValue(e.target.value)
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        setCityName(inputValue)
    }

    const suggestedCitiesGenerator = () => {
        if (inputValue.trim()) {
            const newSuggestedCities = allCities.filter(city => city.toLowerCase().startsWith(inputValue.toLowerCase())).splice(0, 3)
            setSuggestedCities(newSuggestedCities)
        } else {
            setSuggestedCities([])
        }
    }

    const suggestedCityClickHandler = (e) => {

        if (cityname == e.target.textContent) {
            fetchWeather(cityname)
            setInputValue('')
            setSuggestedCities([])
        } else {
            setCityName(e.target.textContent)
        }
    }


    return (
        <form onSubmit={SubmitHandler} className='form' >
            <input
                className='input' type="text"
                placeholder='search a location...'
                value={inputValue}
                onFocus={(e) => { suggestedCitiesGenerator(e) }}
                onChange={inputChangeHandler} />
            <button className='searchbtn'>
                <CiSearch className='searchbtn-icon' size={30} />
            </button>

            <ul className='suggestedCities-list'>
                {suggestedCities.map((city, index) => (<li key={city + index} onClick={suggestedCityClickHandler} className='suggestedCities-item'>{city}</li>))}
            </ul>
        </form >
    )
}
