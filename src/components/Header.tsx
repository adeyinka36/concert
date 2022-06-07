// @ts-ignore
import styled, {StyledComponent} from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import React, { MouseEventHandler, useState, MouseEvent, useRef}  from 'react';
import {useSelector} from "react-redux";




// @ts-ignore
// @ts-ignore
const Con = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: ${({theme})=> theme.props.headerFont ? 'rgba(0,0,0,0)': 'rgba(0,0,0,1)'};
    transition: opacity 500ms;
    padding-left: 1rem;
    padding-right: 1rem;
    z-index: 1;
    nav{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .burger{
        fill: ${({theme})=>theme.colors.main};
        margin-right: 1rem;
    }
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
            color: ${({theme})=>theme.colors.main};
            &:hover{
                color: rgba(255,255,0,1);
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
        svg {
            font-size: 3.7rem;
        }
        ul{
            background-color: ${({theme})=> theme.props.headerFont ? 'rgba(255,255,0,0)': 'rgba(255,255,0,0)'};
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
            margin-top: ${({theme})=> theme.props.headerFont ? '1rem': '0'};
            li{
                margin-bottom: 1rem;
                font-size: 2rem;
                color: 'rgba(255,255,0,1)'
            }
        }
        .logo-div{
            display: flex;
            height: 100%;
            position: relative;
            transition: 1s;
            width: 100vw;
            transition: margin 500ms;
            top: ${({theme})=> theme.props.headerFont ? '20vh': '0'};
            margin: ${({theme})=> theme.props.headerFont ? '0 auto': '.1rem'};
            h1{
                transition: font-size 500ms;
                color: ${({theme})=> theme.props.headerFont ? 'rgba(255,255,0,.5)': 'rgba(255,255,0,1)'};
                font-size: ${({theme})=> theme.props.headerFont ? '20vw': '50px'};
                position: ${({theme})=> theme.props.headerFont ? 'absolute': 'relative'};
                width: ${({theme})=> theme.props.headerFont ? '100vw': '100%'};
                text-align: ${({theme})=> theme.props.headerFont ? 'center': 'left'};;
                letter-spacing: ${({theme})=> theme.props.headerFont ? '5vw': '.25rem'};
                left: ${({theme})=> theme.props.headerFont ? '-1rem': '0'};
            }
        }
        
    }
    
    @media(max-width: 767px){
        nav{
            ul{
               margin-top: 0;
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
            right: 0 !important;
            justify-content: space-around;
            margin-top: 0;
            li{
             margin-right: 1rem;
             margin-bottom: 0;
             font-weight: 1000;
             border-bottom: 3px solid rgba(0,0,0,0);
             color: rgba(255,255,0,1);
             &:hover{
                color: rgba(255,255,0,1);
                border-bottom: 3px solid rgba(255,255,0,1);
             }
            }
        }
      }       
    }
`

const Header: React.FC<{}> = (props: any) =>{
        const [showMenu, setShowMenu] = useState<boolean>(false) ;
        const concertRef = useRef<HTMLHeadingElement>(null);
        const menu = useRef <HTMLUListElement>(null);

        // @ts-ignore
    const handleShowMenu = (event:   MouseEventHandler<SVGElement, MouseEvent>) =>{
            console.log(menu.current);
            if(showMenu) {
                menu.current!.style.right = '-200%';
                menu.current!.style.backgroundColor = "rgba(255,255,0,0)";
                // @ts-ignore
                let children = [...menu.current!.children];
                children.forEach(child=>{
                    child.style.color = "rgba(255,255,0,1)";
                })
            } else {
                menu.current!.style.right = '0';
                menu.current!.style.backgroundColor = "rgba(255,255,0,1)";
                // @ts-ignore
                let children = [...menu.current!.children];
                children.forEach(child=>{
                    child.style.color = "rgba(0,0,0,1)";
                })
                menu.current!.style.right = '0';
            }
            setShowMenu(!showMenu);
        }
    return(
        <Con>
            <nav>
                <div className="logo-div">
                    <h1 ref={concertRef}>ELEMENT</h1>
                </div>
                <FaBars onClick={handleShowMenu} className="svg burger"/>
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