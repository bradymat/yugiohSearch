module.exports = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_ROUTE':
      return { ...state, route: payload }
    case 'SAVE_INPUT':
      return { ...state, search: payload }
    case 'SAVE_CARD':
      state.cards.push(payload)
    case 'SHOW_DATA':
      state.show = payload
      return { ...state }
    default:
      return { ...state }
  }
}
