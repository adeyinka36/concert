export const animate = () =>{
    return(dispatch)=>{
        dispatch({
           type: 'increase'
        })
    }
}

export const noAnimate = ()=>{
    return(dispatch)=>{
        dispatch({
            type:'decrease'
        })
    }
}