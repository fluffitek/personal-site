
picture = [
    {
        "caption" : "KittenG: A graphing calculator made in C",
        "source" : "project-images/kitteng.png"
    },
    {
        "caption" : "This website: INCEPTION!!!",
        "source" : "project-images/website.png"
    }
]

piclen = picture.length
index = 0

function increment(amount)
{
    index += amount
    if (index >= piclen)
    {
        index = 0
    }
    else if (index < 0)
    {
        index = piclen-1
    }
    update()
}

function update()
{
    document.getElementById("caption").innerHTML = picture[index].caption
    document.getElementById("picture").src = picture[index].source
}

function playSound(src)
{
    sound = new Audio(src)
    sound.play()
}

update()
