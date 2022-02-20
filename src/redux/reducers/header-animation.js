const headerAnimation = (action = {type: 'animate'}, payload) =>{
    switch(action.type){
        case 'animate':
            return true
        case 'no-animate':
            return false
        default:
            return false;
    }
}

export default headerAnimation;