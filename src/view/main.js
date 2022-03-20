import '../component/search-bar.js'
import '../component/meal-list.js'
import DataSource from '../data/data-source.js'

const main = () => {
  const search = document.querySelector('search-bar')
  const makananElement = document.querySelector('meal-list')

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.cariMakan(search.value)
      renderResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const renderResult = result => {
    makananElement.meals = result
  }

  const fallbackResult = message => {
    makananElement.renderError(message)
  }

  search.clickEvent = onButtonSearchClicked
}

export default main
