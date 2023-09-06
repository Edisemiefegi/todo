const sec = document.getElementById('sec')
const min = document.getElementById('min')
const hr = document.getElementById('hr')
const start = document.getElementById('start')
const Stop = document.getElementById('stop')
const restart = document.getElementById('restart')
const time = document.getElementById('time')

let timer;
let begin = false

start.addEventListener('click', startWatch)
function startWatch(){
if(!begin){
    let second = sec.innerText
    let minute = min.innerText
    let hour = hr.innerText
   timer = setInterval(()=>{

    //    console.log(minute, second)

        if(second == 59){
            second = 0

           if(minute == 59){
             minute = 0
           }else {
            minute ++
           }

        }else{
            second++
        }

               
       if(minute == 59 && second == 59){
        hour++
    }


        sec.innerText = second.toString().padStart(2, 0)
        min.innerText = minute.toString().padStart(2, 0)
        hr.innerText = hour.toString().padStart(2, 0)


    }, 1000)

    begin = true
}

}


Stop.addEventListener('click', stopWatch)
function stopWatch(){
    sec.innerText = sec.innerText
    min.innerText = min.innerText
    hr.innerText = hr.innerText
    clearInterval(timer)
    begin = false
}

restart.addEventListener('click', ()=>{
    clearInterval(timer)
    sec.innerText = ('00')
    min.innerText = ('00')
    hr.innerText = ('00')

    begin = false
})

