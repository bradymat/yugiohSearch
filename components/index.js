import React from 'react'
import getCardData from '../services/getCardData'

export default ({state, dispatch}) => {
  const saveInput = (e) => dispatch({type: 'SAVE_INPUT', payload: e.target.value})
  const search = () => getCardData(state, dispatch)
  const showInfo = typeof state.show === 'string' ? cardInfo(state) : <i></i>
  return (
    <div>
      <input onClick={(e) => e.target.value = ''} onChange={saveInput} type='text' placeholder='search'/>
      <button onClick={search}>Go</button>
      {showInfo}
      {state.cards.map((card, i) => <img onMouseOver={() => dispatch({type: 'SHOW_DATA', payload: card.name})} key={i} style={{height: '10%', width: '10%'}} src={card.image}/>)}
    </div>
  )
}

function cardInfo (state) {
  var card = state.cards.find((card) => card.name == state.show)
  return (
    <div>
      <img style={{height: '20%', width: '20%'}} src={card.image}/>
      <h2>{card.name}</h2>
      {(card.family && card.image != undefined) ? <h3>{card.family} level {card.level}</h3> : <i></i>}
      {card.type != undefined ? <h3>{card.type}</h3> : <i></i>}
      {(card.atk && card.def != undefined) ? <h3>ATK/  {card.atk} DEF/  {card.def}</h3> : <i></i>}
      {card.property != undefined ? <h3>{card.property} {card.card_type}</h3> : <i></i>}
      <p>{card.text}</p>
    </div>
  )
}
