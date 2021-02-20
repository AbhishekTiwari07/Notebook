const show = document.querySelector('.showcase')
const pos = document.querySelector('.pos')
const cross = document.querySelector('.cross')

const arr = [
    {
        title: "CS202",
        content: "This is some random text......"
    },
    {
        title: "HS101",
        content: "Another random text....."
    }
]


show.addEventListener('click', e=> {
    pos.style.opacity = "1"
    pos.style.zIndex = "1"
})

cross.addEventListener('click', ()=>{
    pos.style.opacity = "0"
    pos.style.zIndex = "-1"
})


const insti = document.getElementById('insti').value
const course = document.getElementById('course').value

if(true) {
    show.classList.add('showcase')
    let str = ""
    arr.map((val) => {
        str += `
            <div class="note">
                <h1 class="title">${val.title}</h1>
                <h3 class="content">${val.content}</h3>
            </div>
        `
    })
    show.innerHTML = str
}
