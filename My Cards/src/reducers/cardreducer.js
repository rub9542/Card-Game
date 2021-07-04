import dp1 from '../dp1.jpg';
import dp2 from '../dp2.jpg';
import dp3 from '../dp3.jpg';
import shuff from '../images/shuffle1.jpg';
import diff from '../images/diffuse.jpg'
import bomb from '../images/bomb.jpg'
import cat from '../images/cat.jpg'

const INITIAL_STATE = {
    cardetails:[
      {
        name: "Cat",
         show:false,images:cat,        
      },
      {
        name: "Diffuse",
         show:false,images:diff,        
      },
      {
        name: "Cat",
         show:false,images:cat,         
      },
      {
        name: "Cat",
         show:false,images:cat,        
      },
      {
        name: "Shuffle",
         show:false,images:shuff, 
      },
{
        name: "Cat",
         show:false,images:cat,        
      },
      {
        name: "Cat",
         show:false,images:cat,        
      },
      {
        name: "Bomb",
         show:false,images:bomb,         
      },
      {
        name: "Cat",
         show:false,images:cat,        
      },
      {
        name: "Shuffle",
         show:false,images:shuff, 
      },{
        1:1,2:2,3:3,4:3,5:5
      }
        
    ]
}

const cardReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        // case 'CARD_DATA':
        //     // const cards=state.cardetails;
        //     console.log('cardetails',state.cardetails)
        //     const temp = action.payload;
        //     const cards = [...state.cardetails, temp] 
        //     console.log("cards given", action.payload)
        //     console.log("cards saved", cards)
        //     return{
        //         ...state,
        //         cardetails:cards
        //     }
        case 'LOGS':
          console.log("card selected", action.payload )
            let card1= action.payload;
            let details=state.cardetails[10]
            details=card1
            console.log("selected", card1)
            const final1 = [...state.cardetails];
          return{
            ...state,
                cardetails:final1

          }
        case 'ON_CHANGE':
          console.log("card selected", state.cardetails[action.payload].show )
            let card= state.cardetails[action.payload+1];
            card.show=true;
            console.log("selected", card)
            const final = [...state.cardetails];
          return{
            ...state,
                cardetails:final

          }

            default: return state
    }
}
export default cardReducer;