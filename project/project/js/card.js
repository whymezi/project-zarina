const url = './card.json'
const wrapper = document.querySelector('.wrapper')
const xhr = new XMLHttpRequest()

xhr.open("GET", url)
xhr.send()
xhr.addEventListener("load", () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let result = JSON.parse(xhr.response)
        result.cards.forEach(item => {
            wrapper.innerHTML += `
            <div class="card">
                <div class="image">
                    <img src="${result.imageUrl}" alt="">
                </div>
                <div class="card-title">${result.title}</div>
                <div class="card-body">${result.body}</div>
            </div>
            `
            console.log(result);
        });
    }
})

// MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}
