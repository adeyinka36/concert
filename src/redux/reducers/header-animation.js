const headerAnimation = (amount = true,action = {} ) =>{
    console.log(action.payload)
    switch(action.type){
        case 'increase':
            return   true
        case 'decrease':
            return   false
        default:
            return true
    }
}

export default headerAnimation;