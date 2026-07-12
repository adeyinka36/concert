import styled from 'styled-components'
import React, {useRef, useEffect} from "react";

const Con = styled.div`
        width: auto;
        min-height: 100vh;
        position: relative;
        margin-bottom: 15vh;
        overflow: hidden;
        *{
         overflow-x: hidden;
        }
        #concert-video{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
            filter: brightness(55%);
        }
`

const Music= React.forwardRef( (props: any , ref:any)=>{
    const main = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    props.setHeaderAnimation(true)
                } else {
                    props.setHeaderAnimation(false)
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
            <video ref={ref} autoPlay muted loop playsInline preload="auto" id="concert-video">
                <source src="/videos/concert.mp4" type="video/mp4"/>
            </video>
        </Con>
    )
})

export default Music