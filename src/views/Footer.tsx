import styled from 'styled-components';
import React from 'react';

const Con =  styled.div`
        background-color: rgba(255,255,0,1);
        height: 50vh;
        padding: 2rem;
        .inner{
            border-top: 4px solid black;
            border-bottom: 4px solid black;
            display: flex;
            height: 100%;
            width: 100%;
            h1,h2{
              font-size: 3.3rem;
            }
            div{
                border-right: 4px solid black;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                width: 25%;
                margin-top: 2rem;
                margin-bottom: 2rem;
                color: black;
                font-weight: bold;
            }
          .small-div{
            border: none;
            width: 100%;
            text-align: center;
            p{
              font-size: 2rem;
            }
          }
            .c{
                border-right: none;
                width: 50%;
            }
        }
 
    .a,.b{
          @media(max-width: 767px) {
            display: none !important;
        }
     }
  .c{
    @media(max-width: 767px) {
      width: 100% !important;
      h1{
        font-size: 2.5rem;
      }
      p{
        font-size: 1.5rem !important;
      }
    }
  }
`


const Footer: React.FC = ()=>{


    return  <Con>
                <div className="inner">
                    <div className="a">
                        <h2>LONDON</h2>
                        <div className='small-div'>
                            <p>Block 6 Penrose street</p>
                            <p>Liverpool Street</p>
                            <p>WC1 4FR</p>
                        </div>
                    </div>
                    <div className="b">
                        <h2>LA</h2>
                        <div className='small-div'>
                            <p>Hawkins walk</p>
                            <p>St Johns chapel</p>
                            <p>C45 9KG</p>
                        </div>
                    </div>
                    <div className="c">
                        <h1>CONCERT</h1>
                        <div className="small-div">
                            <p>Copyright. All rights reserved. Concerts LTD</p>
                            <p>Created and designed by Adeyinka Giwa.</p>
                        </div>
                    </div>
                </div>
            </Con>
}


export default Footer;