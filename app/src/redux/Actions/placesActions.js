export const getPlaces = (data) => ({
  type: 'GET_PLACES',
  payload: data
})

export const selectPlace = (item) => ({
    type: 'SELECT_PLACE',
    payload: item
  })
  
  