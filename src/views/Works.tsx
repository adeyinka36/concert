import styled from 'styled-components'

const Con = styled.div`
        width: auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: black;
        h1,span{
          color: rgba(255,255,0,1);
        }
        

`

const Works = ()=>{

    return(
        <Con>
            <h1>SOME OF OUR</h1>
            <h1>PAST AND PRESENT</h1>
            <h1>EVENTS</h1>
            <span>WORKS</span>
        </Con>
    )
}

export default Works