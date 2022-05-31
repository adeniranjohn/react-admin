import React, { useEffect, useState } from 'react';
import { MdModeNight } from 'react-icons/md';
import { WiDaySunny } from 'react-icons/wi';
import '../styles/Toggle.scss';
import { setTheme } from '../themes';

function Toggle() {
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

    return (
        <div className="toggle">
        
                <span onClick={handleOnClick}>{   togClass === "light" ?   <MdModeNight />  : < WiDaySunny /> } </span>
        </div>
    )
}

export default Toggle;