
import CountryItem from '../CountryItem/CountryItem'
import Message from '../Message/Message'
import Spinner from '../Spinner/Spinner'

//styles
import styles from './CountryList.module.css'

type CityListProp = {
    cities: string[]
    isLoading: boolean
    
}


export default function CityList({cities, isLoading}: CityListProp) {

    if(isLoading) return <Spinner />

    if(!cities.length) return <Message message='Add your first country by a city on the map'/>

    const countries = []
  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => <CountryItem country={country} key={country.id}/>)}
    </ul>
  )
}
