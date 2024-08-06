import './SearchInput.css'
import React, { useEffect, useState } from 'react'
import { useWeather } from '../../hooks/useWeather';
import { CiSearch } from "react-icons/ci";
import {citiesNames} from '../../assests/datas/citiesName' 

export default function SearchInput() {
    const [searchedCityname, setsearchedCityName] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [suggestedCities, setSuggestedCities] = useState([])
    const { setCityName } = useWeather()

    const allCities = citiesNames
    
    useEffect(() => {
        searchedCityname && setCityName(searchedCityname)
        setInputValue('')
        setSuggestedCities([])
    }, [searchedCityname])

    useEffect(() => {
        suggestedCitiesGenerator()
    }, [inputValue])

    const inputChangeHandler = async (e) => {
        setInputValue(e.target.value)
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        setsearchedCityName(inputValue)
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

        if (searchedCityname == e.target.textContent) {
            setCityName(searchedCityname)
            setInputValue('')
            setSuggestedCities([])
        } else {
            setsearchedCityName(e.target.textContent)
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
