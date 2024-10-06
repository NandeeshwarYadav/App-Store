// Write your code here
import './index.css'

const AppItem = props => {
  const {Apps} = props
  const {appName, imageUrl} = Apps
  return (
    <li className="card">
      <img src={imageUrl} className="img" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
