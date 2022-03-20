class MealItem extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({
      mode: 'open'
    })
  }

  // eslint-disable-next-line accessor-pairs
  set meal (meal) {
    this._meal = meal
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
             <style>
                 *{
                     margin: 0;
                     padding: 0;
                     box-sizing: border-box;
                 }
                 :host {
                     display: block;
                     margin-bottom: 18px;
                     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                     border-radius: 30px;
                     overflow: hidden;
                 }
                 .sampul {
                     max-height: 400px;
                     object-fit: cover;
                     object-position: center;
                     width: 100%;
                 }
                 .meal-info {
                     padding: 24px;
                 }
                 .meal-info>h2 {
                     font-weight: bold;
                     font-size: 30px;
                 }
                 .meal-info>p {
                     margin-top: 10px;
                     font-size: 20px;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     display: -webkit-box; 
                     text-align: justify;
                     -webkit-box-orient: vertical; 
                     -webkit-line-clamp: 10; /* number of lines to show */
                 } 
                 </style>
            <img class = "sampul" src = "${this._meal.strMealThumb}" alt = "sampul">
            <div class="meal-info">
                <h2>${this._meal.strMeal}</h2>
                <p>${this._meal.strInstructions}</p>
            </div>`
  }
}

customElements.define('meal-item', MealItem)
