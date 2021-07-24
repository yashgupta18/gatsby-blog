import React from 'react'
import { HamburgerIcon } from './Hamburger.styles'
const Hamburger = ({menuOpen, setMenuOpen}) => {
    return (
        <HamburgerIcon role="button" menuOpen={menuOpen} onClick={()=>setMenuOpen(prev=> !prev)}>
            <div />
        </HamburgerIcon>
    )
}

export default Hamburger
