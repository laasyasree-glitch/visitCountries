import {RemoveButton} from './styledComponents'

const VisitedCountries = props => {
  const {details, onClickUpdate} = props
  const {id, name, imageUrl} = details
  const onClickButton = () => onClickUpdate(id)
  return (
    <li>
      <p>{name}</p>
      <img src={imageUrl} alt="thumbnail" />
      <RemoveButton onClick={onClickButton}>Remove</RemoveButton>
    </li>
  )
}

export default VisitedCountries
