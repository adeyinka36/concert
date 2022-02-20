// @ts-ignore
import styled, {StyledComponent} from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { MouseEventHandler, useState, MouseEvent, useRef}  from 'react';
import React from 'react';



const Con = styled.div`
    background-color: ${({theme})=>theme.colors.main};
    padding-left: 1rem;
    padding-right: 1rem;
    nav{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    ul{
        display: flex;
        justify-content: space-around;
        li{
            font-weight: 800;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover{
                background-color: black;
                color: ${({theme})=>theme.colors.main};
                cursor: pointer;
            }
             
        }
        .cancel{
             justify-content: flex-end;
             align-items: flex-start;
             &:hover{
                background-color: ${({theme})=>theme.colors.main};
                color: black;
                cursor: pointer;
            }
        }
    }
    svg{
     font-size: 3.7rem;
    }
        ul{
            background-color: ${({theme})=>theme.colors.main};
            position: fixed;
            top: 0;
            right: -200%;
            width: 100vw;
            height: 100vh;
            background-color: 
            display: flex;
            flex-direction: column;
            justify-contents: space-around;
            align-items: center;
            transition: 1s;
            li{
                margin-bottom: 1rem;
                font-size: 2rem;
            }
        }
        .logo-div{
            display: flex;
            height: 100%;
            h1{
                font-size: 3.4rem;
            }
        }
        
    }
    //large screen styles
    @media(min-width: 768px) {
      .svg{
        display: none !important;
      }
      nav{
        ul{
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            flex-direction: row;
            right: 0;
            justify-content: space-around;
            li{
             margin-right: 1rem;
             margin-bottom: 0;
             font-weight: 1000;
             &:hover{
                background-color: ${({theme})=>theme.colors.main};
                color: black;
                border-bottom: 3px solid black;
             }
            }
        }
      }   
    }
`

const Header: React.FC<{}> = (props: any) =>{
        const [showMenu, setShowMenu]= useState<boolean>(false) ;
        const menu = useRef <HTMLUListElement>(null);

        // @ts-ignore
    const handleShowMenu = (event:   MouseEventHandler<SVGElement, MouseEvent>) =>{
            console.log(menu.current);
            if(showMenu) {
                menu.current!.style.right = '-200%';
            } else {
                menu.current!.style.right = '0';
            }
            setShowMenu(!showMenu);

        }
    return(
        <Con >
            <nav>
                <div className="logo-div">
                    <h1>CONCERT</h1>
                </div>
                <FaBars onClick={handleShowMenu} className="svg"/>
                <ul ref={menu}>
                    <li className="cancel svg">< MdCancel onClick={handleShowMenu}/></li>
                    <li>WORK</li>
                    <li>SERVICES</li>
                    <li>CLIENTS</li>
                    <li>ABOUT</li>
                </ul>
            </nav>
        </Con>
    )
}
export default Header;