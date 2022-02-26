window.addEventListener('DOMContentLoaded', async(event) => {
    const resObj = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    const photos = await resObj.json()
    for (let photo of photos) {
        const {title,thumbnailUrl} = photo;
        const img = document.createElement('img')
        img.src = thumbnailUrl;
        img.title = title;
        img.style.padding = '5px 5px'
        document.getElementById('root').appendChild(img)
    }
});