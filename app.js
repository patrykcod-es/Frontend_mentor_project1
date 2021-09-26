const shareBtn = document.getElementById('share')
const sharePopup = document.getElementById('share-pop-up')


shareBtn.addEventListener('click', () => {
    sharePopup.classList.toggle('visible')
} )