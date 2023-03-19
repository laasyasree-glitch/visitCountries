import {VisitButton} from './styledComponents'

const CountriesList = props => {
  const {details, onClickUpdate} = props
  const {id, name, isVisited} = details
  const onClickButton = () => onClickUpdate(id)
  return (
    <li>
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <VisitButton isVisited={isVisited} onClick={onClickButton}>
          Visit
        </VisitButton>
      )}
    </li>
  )
}

export default CountriesList
