import React, { Component } from 'react';
import Cardlist from './Cardlist';
import {deck2} from './CardArray';
import Searchbox from './Searchbox';




class App extends Component{
constructor(){
super()
this.state={
    deck:deck2,
    searchField:''
}

}

searchChange=(e)=>{
this.setState({searchField:e.target.value})
}




render() {
const {searchChange}=this    
const {deck,searchField}=this.state
const filteredCards=deck.filter(x=>{
    return x.name.toLowerCase().includes(searchField.toLowerCase())
})

return (

<div className=''>

<Searchbox searchChange={searchChange}/>
<Cardlist deck={filteredCards}/></div>

)



}




}


export default App;