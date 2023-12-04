import React from 'react';
import './../css/ThumbnailsContainer.css'

export const ThumbnailsContainer = ({ thumbnails, activeThumbnail, changeImg }) => {
    return (

        <div className="thumbnails-container">

            {
                thumbnails.map((thumbnail, index) => {

                    return (

                        <div className={`thumbnail-container ${index === activeThumbnail && 'active-thumbnail'}`} onClick={() => changeImg(index)}>
                            <img src={thumbnail} alt="" />
                        </div>
                    )
                })
            }

        </div>
    )
}
