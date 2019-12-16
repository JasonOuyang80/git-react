import React from 'react'

const Card=({name,id})=>{

return (

<div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'>
<img src={`http://en.castlots.org/img/cards/${id}.jpg `} alt='images'/>
<h1>Name:{name}</h1>
</div>
)



}


export default Card;