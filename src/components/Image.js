import React from 'react';

var keys;
function importAll(r) {
    keys = r.keys();
    return r.keys().map(r);
}

const paths = importAll(require.context('../Images/', false, /\.(png|jpe?g|svg)$/));

var images = [];
for (let i = 0; i < keys.length; i++) {
    keys[i] = keys[i].replace('./', '');
    images[keys[i]] = paths[i].default;
}

//const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));
//console.log(images.keys());

export const Image = ({
    className = '',
    img = '',
    id = '',
    alt='',
    keys=images.keys(),
    onClick=()=>{}
}) => {

    return (
        <img onClick={onClick} id={id} alt={alt} className={className} src={images[img]} ></img>
    )

}

Image.images = images;
Image.keys = keys;

export default Image;
