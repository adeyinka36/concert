// @ts-ignore
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import React, { useState, useRef, useEffect } from 'react';




// @ts-ignore
// @ts-ignore
const Con = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
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
            background-color: rgba(255,255,0,0);
            position: fixed;
            top: 0;
            right: -200%;
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            transition: 1s;
            margin-top: ${({theme})=> theme.props.headerFont ? '1rem': '0'};
            li{
                margin-bottom: 1rem;
                font-size: 2rem;
                color: rgba(255,255,0,1);
            }
        }
        .logo-div{
            display: ${({theme})=> theme.props.headerFont ? 'grid' : 'flex'};
            place-items: ${({theme})=> theme.props.headerFont ? 'center' : 'normal'};
            justify-content: ${({theme})=> theme.props.headerFont ? 'center' : 'flex-start'};
            height: ${({theme})=> theme.props.headerFont ? '100vh' : '100%'};
            position: ${({theme})=> theme.props.headerFont ? 'fixed' : 'relative'};
            inset: ${({theme})=> theme.props.headerFont ? '0' : 'auto'};
            flex: 1;
            min-width: 0;
            transition: margin 500ms;
            margin: ${({theme})=> theme.props.headerFont ? '0': '.1rem'};
            &:hover{
              cursor: pointer;
            }
            h1{
                transition: font-size 500ms;
                color: ${({theme})=> theme.props.headerFont ? 'rgba(255,255,0,.5)': 'rgba(255,255,0,1)'};
                font-size: ${({theme})=> theme.props.headerFont ? 'clamp(3rem, 11vw, 8rem)': 'clamp(2rem, 4vw, 3.1rem)'};
                position: relative;
                width: ${({theme})=> theme.props.headerFont ? 'auto' : '100%'};
                text-align: ${({theme})=> theme.props.headerFont ? 'center': 'left'};
                letter-spacing: ${({theme})=> theme.props.headerFont ? 'clamp(.4rem, 1.8vw, 1.2rem)': '.25rem'};
                left: 0;
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
    
    /* large screen styles */
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
const Header = (props: any) =>{
        const [showMenu, setShowMenu] = useState<boolean>(false) ;
        const concertRef = useRef<HTMLHeadingElement>(null);
        const menu = useRef <HTMLUListElement>(null);
        const [screenWidth, setScreenWidth] = useState(
            typeof window !== 'undefined' ? window.innerWidth : 1024
        );

        useEffect(() => {
            // Handler to call on window resize
            const handleResize = () => {
                // Set window width to state
                setScreenWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener('resize', handleResize);
        }, []); // Empty array ensures that effect is only run on mount

            const navigate = (location: string) =>{
            props.scroll(location);
            setShowMenu(false)
            handleShowMenu()
        }

        // @ts-ignore
    const handleShowMenu = () =>{
            if(  screenWidth > 768) {
                return;
            }
            if(showMenu) {
                menu.current!.style.right = '-200%';
                menu.current!.style.backgroundColor = "rgba(255,255,0,0)";
                // @ts-ignore
                const children = [...menu.current!.children] as HTMLElement[];
                children.forEach(child=>{
                    child.style.color = "rgba(255,255,0,1)";
                })
            } else {
                menu.current!.style.right = '0';
                menu.current!.style.backgroundColor = "rgba(255,255,0,1)";
                // @ts-ignore
                const children = [...menu.current!.children] as HTMLElement[];
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
                <div className="logo-div" onClick={()=>props.scroll('home')}>
                    <h1 ref={concertRef}>ELEMENT</h1>
                </div>
                <FaBars onClick={handleShowMenu} className="svg burger"/>
                <ul ref={menu}>
                    <li className="cancel svg">< MdCancel onClick={handleShowMenu}/></li>
                    <li onClick={()=>navigate('work')}>WORK</li>
                    <li onClick={()=>navigate('services')}>SERVICES</li>
                    <li onClick={()=>navigate('clients')}>CLIENTS</li>
                    <li onClick={()=>navigate('about')}>ABOUT</li>
                </ul>
            </nav>
        </Con>
    )
}
export default Header;