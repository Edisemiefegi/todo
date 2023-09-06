const text = document.getElementById('input')
const containerList = document.getElementById('list-container')
const button = document.getElementById('btn')

button.addEventListener('click', addtask)

function addtask(){
    if(text.value === ''){
        alert('you must write something')
    }else{
        let li = document.createElement("li");
        li.innerText = text.value;
        containerList.appendChild(li);

        let span = document.createElement("span")
        span.innerText = " "

        let img = document.createElement('img')
        // img.setAttribute('src', 'image/Close_round_fill@2x.png')

        span.appendChild(img)
        li.appendChild(span)    
    }

    text.value = ''
    save();

}

containerList.addEventListener('click', strike)
function strike(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        save()
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        save()
    }
}

function save(){
    localStorage.setItem("data", containerList.innerHTML);
}

function showtask(){
    containerList.innerHTML = localStorage.getItem("data");
}
showtask();
