import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { allActions } from '../redux/actions/index';
import { bindActionCreators } from "redux";
import React, {useState, useRef, useEffect} from "react";
// @ts-ignore
import concertVideo from '../assets/videos/concert.mp4';

const Con = styled.div`
        width: auto;
        min-height: 100vh;
        position: relative;
        margin-bottom: 15vh;
        overflow-x: clip;
        *{
         overflow-x: hidden;
        }
        #concert-video{
            position: absolute;
            top: 0;
            left: 0;
            min-width: 100%;
            min-height: 100%;
            z-index: -2;
            filter: brightness(55%);
        }
`

const Music: React.FC = ()=>{
    const dispatch = useDispatch();
    const { animate, noAnimate } = bindActionCreators(allActions, dispatch);
    const main = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    animate()
                } else {
                    noAnimate()
                }
            })
        },{
            threshold: .75
        })

        if(main.current) {
            observer.observe(main.current)
        }
    },[])

    return(
        <Con ref={main} className="main" >
            <video autoPlay muted loop id="concert-video">
                <source src={concertVideo} type="video/mp4"/>
            </video>
        </Con>
    )
}

export default Music