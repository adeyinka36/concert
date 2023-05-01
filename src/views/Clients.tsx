import styled from 'styled-components';
import React from "react";
import clients from '../assets/images/clients.jpg';

const Con = styled.div`
        background-image: url(${clients});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        
        position: relative;
        &:before {
            content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-image: linear-gradient(to bottom right,#002f4b,#dc4225);
                opacity: .7; 
        }
        
        width: auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: black;
        h1,span{
          color: rgba(255,255,0,1);
          letter-spacing: .3rem;
          font-size: 3rem;
          z-index: 0;
        }
        h1{
          text-align: center;
        }
        span{
            font-size: 2.5rem;
            margin-top: 3rem;
            padding: 1rem;
            border: 2px solid rgba(255,255,0,1);
            &:hover{
                cursor: pointer;
                background-color: rgba(255,255,0,1);
                color: rgba(0,0,0,1);
            }
        }
        
         @media(max-width: 375px){
            h1,span{ font-size: 2rem}
        }
       
`

const Clients =  React.forwardRef((props: any, ref:any) =>{


    return <Con>
            <h1 ref={ref}>SOME OF THE CLIENTS</h1>
            <h1>THAT WE HAVE</h1>
            <h1>WORKED WITH</h1>
            <span>CLIENTS</span>
           </Con>
})


export default Clients;