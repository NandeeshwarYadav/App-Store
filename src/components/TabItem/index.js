// Write your code here
import './index.css'

const TabItem = props => {
  const {Tabs, onClickCategory, isActive} = props
  const {tabId, displayText} = Tabs
  const clickTabButton = () => {
    onClickCategory(tabId)
    console.log({isActive})
  }
  const activeTabBtnClassName = isActive ? 'change-tab-button' : ''
  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={clickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
