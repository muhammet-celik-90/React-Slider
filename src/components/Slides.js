import React, { useEffect, useState } from 'react';

function Slides({ slides }) {

    const [initialValue, setInitialValue] = useState(1)
    const [title, setTitle] = useState(slides[0].title)
    const [text, setText] = useState(slides[0].text)
    const [nextShow,setNextShow] = useState(true)
    const [prevShow,setPrevShow] = useState(false)

    const handleNext = () => {
        if(initialValue < slides.length) {
            setInitialValue(initialValue + 1)
            setPrevShow(true)
        }
        if(initialValue === slides.length -1) {
            setNextShow(false)
        }
        setTitle(slides[initialValue].title)
        setText(slides[initialValue].text)
    }

    const handleRestart = () => {
        setInitialValue(1)
        setNextShow(true)
        setTitle(slides[0].title)
        setText(slides[0].text)
        setPrevShow(false)
    }

    const handlePrev = () => {
        setInitialValue(initialValue - 1)
        setNextShow(true)
    }
    useEffect(()=> {
        setTitle(slides[initialValue-1].title)
        setText(slides[initialValue-1].text)
    },[handlePrev])

    useEffect(()=> {
        if(initialValue === 1) {
            setPrevShow(false)
        }
    },[initialValue])
    console.log(initialValue)

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={handleRestart}>Restart</button>
                <button data-testid="button-prev" className="small" disabled={!prevShow} onClick={handlePrev}>Prev</button>
                <button data-testid="button-next" className="small" onClick={handleNext} disabled={!nextShow}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{title && title}</h1>
                <p data-testid="text">{text && text}</p>
            </div>
        </div>
    );

}

export default Slides;