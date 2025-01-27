import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      return { ...state, restaurants: [...state.restaurants, { text: action.restaurant, id: cuid() } ] }

    case 'DELETE_RESTAURANT':
      return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }

    case 'EDIT_RESTAURANT':
    console.log(action)
      return { ...state, restaurants: state.restaurants.map(
        restaurant => {
          if(restaurant.id === action.restaurant.id){
            restaurant.text = action.restaurant.text
            return restaurant
          }else{
            return restaurant
          }
        })
      }

    case 'ADD_REVIEW':
      return { ...state, reviews: [...state.reviews, {text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() } ] }

    case 'DELETE_REVIEW':
      return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }

    case 'EDIT_REVIEW':
      return { ...state, reviews: state.reviews.map(
        review => {
          if(review.id === action.review.id){
            review.text = action.review.text
            return review
          }else{
            return review
          }
        })
      }

    default:
      return state
  }

}
