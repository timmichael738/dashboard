import React from 'react'
import Icons from '../assets/icons/Icons';

function Footer() {

const getFullYear = new Date().getFullYear();
    return (
        <footer className="text-sm justify-between flex py-2 text-center text-black dark:text-darkmuted ltr:md:text-left rtl:md:text-right px-10">

            {`© ${getFullYear}`}
            <span className="hidden ltr:float-right rtl:float-left md:inline-block">Crafted with
                <Icons.loveEmoji />
                by SRBThemes</span>
        </footer>
    )
}

export default Footer