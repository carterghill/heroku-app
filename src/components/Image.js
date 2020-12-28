import React from 'react';
import atom from '../Images/atom.png'
import codelogo from '../Images/codelogo.png'
import computer from '../Images/computer.jpg'
import discord from '../Images/discord.png'
import linux from '../Images/linux.png'
import logo from '../Images/logo.png'
import love2d from '../Images/love2d.png'
import tielogo from '../Images/tielogo.png'
import unity from '../Images/unity.png'

function importAll(r) {

    var table = {};
    var item;
    var values = console.log(r.keys().map(r));
    var keys = [];

    r.keys().map(item => {
        console.log(item);
        keys.push(item)
    });

    for (let i = 0; i < keys.length; i++) {
        table[keys[i]] = r.keys().map(r)[i];
    }

    return table;
}

//const images = importAll(require.context('../Images/', false, /\.(png|jpe?g|svg)$/));

const images = {
    'atom.png':     atom,
    'codelogo.png': codelogo,
    "computer.jpg": computer,
    "discord.png": discord,
    "linux.png": linux,
    "logo.png": logo,
    "love2d.png": love2d,
    "tielogo.png": tielogo,
    "unity.png": unity
}

export const Image = ({
    className = '',
    img = ''
}) => {

    return (
        <img className={className} src={images[img]} />
    )

}

export default Image;
