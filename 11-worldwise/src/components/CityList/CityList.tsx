import CityItem from '../CityItem/CityItem'
import Message from '../Message/Message'
import Spinner from '../Spinner/Spinner'

//styles
import styles from './CityList.module.css'

type CityListProp = {
    cities: string[]
    isLoading: boolean
    
}


export default function CityList({cities, isLoading}: CityListProp) {

    if(isLoading) return <Spinner />

    if(!cities.length) return <Message message='Add your first city by a city on the map'/>
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => <CityItem city={city} key={city.id}/>)}
    </ul>
  )
}
