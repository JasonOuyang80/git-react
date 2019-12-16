import React from 'react';
import Card from './Card';

const Cardlist =({deck})=>{

    return (
   <div>{
     deck.map((x,i)=>{

      return  <Card key={i} id={x.id} name={x.name} deck={deck}/>


     })
    } </div>
    )


}

export default Cardlist;