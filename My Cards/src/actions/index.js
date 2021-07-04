export const submit = (payload)=>{
    return{
        type:'ON_SUBMIT',
        payload
    }    
}
export const change = (payload)=>{
    return{
        type:'ON_CHANGE',
        payload
    }    
}

export const cred = (payload)=>{
    return{
        type:'ACTUAL_VALUE',
        payload
    }    
}
export const logs = (payload)=>{
    console.log("NAME action", payload)
    return{
        type:'LOGS',
        payload
    }    
}
export const carded = (payload) =>{
    return{
        type:'CARD_DATA',
        payload
    }
}
export const getCart = (payload) =>{
    return{
        type:'ADD_CART',
        payload
    }
}
export const selectCard = (payload) =>{
    return{
        type:'SELECT_CARD',
        payload
    }
}
