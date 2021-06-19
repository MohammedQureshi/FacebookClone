import React from 'react'
import { Avatar } from '@material-ui/core';
import './Header.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PublicIcon from '@material-ui/icons/Public';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { FaEllipsisH } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go'

function Header({avatar, name, verified, time, audience}) {
    return (
        <div className="Header">
            <div className="avatar">
                <Avatar src={avatar}/>
            </div>
            <div>
                <div className="Header__User">
                    <h3> {name} </h3> {verified && <GoVerified className="verified__icon" />}
                </div>
                <div className="Header">
                    <p> {time} ·</p> {audience ? <PublicIcon /> : <AccessibilityNewIcon />}
                </div>
            </div>
            <div className="menu">
               <button><FaEllipsisH className="Header__KebabMenu" /></button>
            </div>
        </div>
    )
}

export default Header
