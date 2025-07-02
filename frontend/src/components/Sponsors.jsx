'use client'

import React from "react";
import MarqueeItem from "./ui/Marquee";

function Sponsors(){

    const img = [
        '/netflix.png',
        '/apple.jpg',
        '/google.png',
        '/microsoft.png',
        '/starbucks.jpeg',
        '/logo.png',
        '/netflix.png',
        '/apple.jpg',
        '/google.png',
        '/microsoft.png',
        '/starbucks.jpeg',
        '/logo.png',
        '/netflix.png',
        '/apple.jpg',
        '/google.png',
        '/microsoft.png',
        '/starbucks.jpeg',
        '/logo.png',
    ]
    return(
        <div className="overflow-hidden mb-8">
            <div>
                <h1 className="text-center mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">Our Sponsors</h1>
                <MarqueeItem images={img} from={0} to={"-100%"}></MarqueeItem>
                <MarqueeItem images={img} from={"-100%"} to={0}></MarqueeItem>
            </div>
        </div>
    )
}

export default Sponsors;