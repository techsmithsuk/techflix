import React from 'react';

const imageStyle = {
    'width': '100%',
    'height': '100%',
    'object-fit': 'cover',
    'object-position': 'center',
};

export function Card() {
    return (
        <div>
            <img style={imageStyle} src={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>
        </div>
    );
}