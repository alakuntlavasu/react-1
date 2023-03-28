import React, { useState } from 'react'

const Vasu = () => {

  const [name, setname] = useState({ firstName: '', lastname: '' })

  return (
    <div>
      <form>
        <input type='text' value={name.firstName} onChange={e => setname({ ...name, firstName: e.target.value })} />
        <input type='text' value={name.lastname} onChange={e => setname({ ...name, lastname: e.target.value })} />
        <h2>Your first name is-{name.firstName}</h2>
        <h2>Your last  name is-{name.lastname}</h2>
        {/* <h3>{JSON.stringify(name)}</h3> */}
      </form>

    </div>
  )
}

export default Vasu 