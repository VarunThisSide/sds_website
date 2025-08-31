'use client'

import React from "react";
import MarqueeItem from "./ui/Marquee";

function Sponsors(){

    const upperImg = [
        '/sponsors/Aimerz.png',
        '/sponsors/notice.png',
        '/sponsors/Unstop.png',
        '/sponsors/Aimerz.png',
        '/sponsors/notice.png',
        '/sponsors/Unstop.png',
        '/sponsors/Aimerz.png',
        '/sponsors/notice.png',
        '/sponsors/Unstop.png',
        '/sponsors/Aimerz.png',
        '/sponsors/notice.png',
        '/sponsors/Unstop.png',
    ];
    const lowerImg = [
        '/sponsors/Unstop.png',
        '/sponsors/notice.png',
        '/sponsors/Aimerz.png',
        '/sponsors/Unstop.png',
        '/sponsors/notice.png',
        '/sponsors/Aimerz.png',
        '/sponsors/Unstop.png',
        '/sponsors/notice.png',
        '/sponsors/Aimerz.png',
        '/sponsors/Unstop.png',
        '/sponsors/notice.png',
        '/sponsors/Aimerz.png',
    ];
    return(
        <div className="overflow-hidden mb-8">
            <div>
                <h1 className="text-center mt-20 md:mt-0 text-5xl md:text-[45px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">Our Sponsors</h1>
                <MarqueeItem images={upperImg} from={"-100%"} to={0}></MarqueeItem>
                <MarqueeItem images={lowerImg} from={0} to={"-100%"}></MarqueeItem>
            </div>
        </div>
    )
}

export default Sponsors;