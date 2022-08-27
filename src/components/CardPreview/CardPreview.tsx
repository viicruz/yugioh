import React, { useState } from 'react'
import "./style.sass"

type Props = {}
import img from "../../assets/Cardback.png"
export default function CardPreview({ }: Props) {
    const [cardImg, setcardImg] = useState(img)
    return (
        <>

            <img className='imgCardPreview' src={cardImg} alt="" />

        </>
    )
}