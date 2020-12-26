var canvas
var c
var chords = []
const center = {
    x: innerWidth / 2,
    y: innerHeight / 2
}
let chordCounter = 0


const vertex1 = {
    x: 10, 
    y: innerHeight - 10
}

const vertex2 = {
    x: innerWidth - 10,
    y: innerHeight - 10
}

const vertex3 = {
    x: center.x,
    y: 10
}


function getAColor(){
    var chars = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i<6; i++){
        color += chars[Math.ceil(Math.random() * 15)]
    }
    return color
}

function bw(){
    var chars = "0123456789ABCDEF"
    var char = chars[Math.ceil(Math.random() * 15)]
    var gray = "#" + char.repeat(6)
    return gray
}

window.onload = function myfunction() {
    canvas = document.getElementById('canvas')
    canvas.height = innerHeight
    canvas.width = innerWidth
    c = canvas.getContext('2d')
    c.globalAlpha = 1
    // drawTriangle()
    drawChords1()
}

window.onresize = function() { resize() }

function resize() {
    // canvas.height = innerHeight
    // canvas.width = innerWidth
}

function drawTriangle(){
    c.beginPath()
    c.lineWidth = 6
    c.strokeStyle = "black"
    c.moveTo(vertex1.x, vertex1.y)
    c.lineTo(vertex2.x, vertex2.y)
    c.lineTo(vertex3.x, vertex3.y)
    c.lineTo(vertex1.x, vertex1.y)
    c.stroke()
    c.closePath()
}


function drawChord1(){
    startProportion = Math.random()

    c.beginPath()
    c.lineWidth = 3
    c.strokeStyle = getAColor()
    c.moveTo(vertex1.x + startProportion * (vertex2.x - vertex1.x), vertex1.y + startProportion * (vertex2.y - vertex1.y))
    c.lineTo(vertex2.x + startProportion * (vertex3.x - vertex2.x), vertex2.y + startProportion * (vertex3.y - vertex2.y))
    c.stroke()
    c.closePath()

}

function drawChord2(){
    startProportion = Math.random()

    c.beginPath()
    c.lineWidth = 3
    c.strokeStyle = getAColor()
    c.moveTo(vertex2.x + startProportion * (vertex3.x - vertex2.x), vertex2.y + startProportion * (vertex3.y - vertex2.y))
    c.lineTo(vertex3.x + startProportion * (vertex1.x - vertex3.x), vertex3.y + startProportion * (vertex1.y - vertex3.y))
    c.stroke()
    c.closePath()

}

function drawChord3(){
    startProportion = Math.random()

    c.beginPath()
    c.lineWidth = 3
    c.strokeStyle = getAColor()
    c.moveTo(vertex3.x + startProportion * (vertex1.x - vertex3.x), vertex3.y + startProportion * (vertex1.y - vertex3.y))
    c.lineTo(vertex1.x + startProportion * (vertex2.x - vertex1.x), vertex1.y + startProportion * (vertex2.y - vertex1.y))
    c.stroke()
    c.closePath()

}


function drawChords1(){
    chordCounter++
    if (chordCounter < 100){
        requestAnimationFrame(drawChords1)
    }
    else{
        chordCounter = 0 
        requestAnimationFrame(drawChords2)
    }
    drawChord1()
}

function drawChords2(){
    chordCounter++
    if (chordCounter < 100){
        requestAnimationFrame(drawChords2)
    }
    else{
        chordCounter = 0 
        requestAnimationFrame(drawChords3)
    }
    drawChord2()
}

function drawChords3(){
    chordCounter++
    if (chordCounter < 100){
        requestAnimationFrame(drawChords3)
    }
    drawChord3()
}
