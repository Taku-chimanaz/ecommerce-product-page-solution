export const nextImg = (e, activeThumbnail, setActiveImage, images, setActiveThumbnail) => {
    console.log(setActiveImage)
    const clickedBtn = e.target.alt !== undefined ? e.target.alt.split(" ")[0].toUpperCase() : e.target.className.split("-")[0].toUpperCase()


    if (clickedBtn === 'NEXT') {
        if (activeThumbnail === 3) {
            setActiveImage(images[0]);
            setActiveThumbnail(0)
        } else {
            setActiveImage(images[activeThumbnail + 1]);
            setActiveThumbnail(activeThumbnail + 1)
        }
    } else {
        if (activeThumbnail === 0) {
            setActiveImage(images[3]);
            setActiveThumbnail(3)

        } else {
            setActiveImage(images[activeThumbnail - 1]);
            setActiveThumbnail(activeThumbnail - 1)
        }
    }

}