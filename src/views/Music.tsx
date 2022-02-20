import styled from 'styled-components'
import React, {useEffect, useRef} from "react";
import { useDispatch } from "react-redux";
import {allActions}from '../redux/actions/index';
import {bindActionCreators} from "redux";
import {useSelector} from "react-redux";

const Con = styled.div`
        width: 100vw;
        height: 100vh;
        background-color: blue;

`

const Music: React.FC = ()=>{
    const dispatch = useDispatch();
    const {animate, noAnimate} = bindActionCreators(allActions, dispatch);
    noAnimate();
    let state = useSelector(state=>state)
    console.log(state)
    let observer: any;
    let main = useRef< HTMLDivElement>(null);
    useEffect(()=>{
         observer =  new IntersectionObserver((entries, observer)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    console.log(entry, 'yes')
                }else {
                    console.log('no')
                }
            })
        },options)
        if(main.current) observer.observe(main.current)
    },[])

    const options: object = {
        // rootMargin: '500px'
    };


    return(
        <Con className="main" ref={main}>

        </Con>
    )
}

export default Music