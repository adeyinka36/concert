export const animate = ()=>{
    return(dispatch)=>{
        dispatch({
           type: 'animate'
        })
    }
}

export const noAnimate = ()=>{
    return(dispatch)=>{
        dispatch({
            type:'no-animate'
        })
    }
}