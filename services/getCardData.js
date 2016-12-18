import request from 'superagent'

export default (state, dispatch) => {
  var card = ''
  request
    .get(`http://yugiohprices.com/api/card_data/${state.search}`)
    .end((err, res) => {
      if (!err) {
        card = res.body.data
        var imageSearchTerm = state.search.replace(/ /g,'_')
        card.image = `http://static.api3.studiobebop.net/ygo_data/card_images/${imageSearchTerm}.jpg`
        console.log(card);
        dispatch({type: 'SAVE_CARD', payload: card})
      }
    })
}
