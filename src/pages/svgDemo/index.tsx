import React from "react";
import './index.scss';

export const SvgDemo = () => {

    return <>
    <div className="svgFont">
        <svg viewBox="0 0 900 190">
            <defs>
                {/* 定义两个线性渐变 */}
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0e93eb', stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: '#e901ff', stopOpacity: 0.9 }} />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="0" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0e93eb', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#e901ff', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <text x="0" y="98%">
                VOICE
            </text>
        </svg>
    </div>
    <svg width={300} height={300}>
        <path d="M0,0 Q100,100 200,0" fill="url(#grad1)"/>
    </svg>
    </>

}