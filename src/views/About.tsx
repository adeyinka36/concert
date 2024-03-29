import styled from 'styled-components';
import React from "react";
import about from '../assets/images/about.jpg';


const Con = styled.div`
        background-image: url(${about});
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

const About =  React.forwardRef((props:any, ref: any) =>{


    return <Con>
            <h1 ref={ref}>WE CREATE EVENTS</h1>
            <h1>THAT BLOW</h1>
            <h1>YOR MIND</h1>
            <span>ABOUT</span>
          </Con>
})


export default About;