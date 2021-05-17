import React from 'react'


const Tweet = ({ name, message }) => {// Don't forget to pass props into the parent function before using props in a component.

  return(
    <form>
      <h2>{name}</h2>
      <p>{message}</p>
        <button>like</button>
        <button>delete</button>
    </form>
  )
}

export default Tweet;