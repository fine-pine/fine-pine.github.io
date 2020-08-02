const frames = document.querySelectorAll(".toDoList"),
    lB = document.querySelector(".lB"),
    rB = document.querySelector(".rB"),
    SLIDETIME = 1000;

function handleRC()
{
    frames.forEach(frame=>
    {
        if(Number(frame.className.split(" ")[1][1]) === 1)
        {
            frame.classList.add(`f${frames.length}`);
        }
        else
        {
            frame.classList.add(`f${Number(frame.className.split(" ")[1][1])-1}`);
        }
        frame.classList.remove(frame.className.split(" ")[1]);
    })
}

function handleLC()
{
    frames.forEach(frame=>
    {
        if(Number(frame.className.split(" ")[1][1]) === frames.length)
        {
            frame.classList.add(`f1`);
        }
        else
        {
            frame.classList.add(`f${Number(frame.className.split(" ")[1][1])+1}`);
        }
        frame.classList.remove(frame.className.split(" ")[1]);
    })
}

function init()
{
    lB.addEventListener("click", handleLC);
    rB.addEventListener("click", handleRC);
}

init();
setInterval(handleRC, 5000);