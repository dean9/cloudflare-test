var canvas
var c
var chords = []
const center = {
    x: innerWidth / 2,
    y: innerHeight / 2
}
let chordCounter = 0


const line1 = {
    x: 10, 
    y: innerHeight - 10,
    endX: innerWidth - 10,
    endY: this.y
}

const line2 = {
    x: innerWidth - 10,
    y: innerHeight - 10,
    endX: center.x,
    endY: 10
}

const line3 = {
    x: center.x,
    y: 10,
    endX: 10,
    endY: innerHeight - 10
}



function bw(){
    var chars = "0123456789ABCDEF"
    var char = chars[Math.ceil(Math.random() * 15)]
    var gray = "#" + char.repeat(6)
    return gray
}

function getAColor(){
    var chars = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i<6; i++){
        color += chars[Math.ceil(Math.random() * 15)]
    }
    return color
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
    canvas.height = innerHeight
    canvas.width = innerWidth
}

function drawTriangle(){
    c.beginPath()
    c.lineWidth = 6
    c.strokeStyle = "black"
    c.moveTo(line1.x, line1.y)
    c.lineTo(line2.x, lsne2.y)
    c.lineTo(line3.x, line3.y)
    c.lineTo(line1.x, line1.y)
    c.stroke()
    c.closePath()
}


function drawChord1(){
    startProportion = Math.random()

    c.beginPath()
    c.lineWidth = 3
    c.strokeStyle = getAColor()
    c.moveTo(line1.x + startProportion * (line2.x - line1.x), line1.y + startProportion * (line2.y - line1.y))
    c.lineTo(line2.x + startProportion * (line3.x - line2.x), line2.y + startProportion * (line3.y - line2.y))
    c.stroke()
    c.closePath()

}

function drawChord2(){
    startProportion = Math.random()

    c.beginPath()
    c.lineWidth = 3
    c.strokeStyle = getAColor()
    c.moveTo(line2.x + startProportion * (line3.x - line2.x), line2.y + startProportion * (line3.y - line2.y))
    c.lineTo(line3.x + startProportion * (line1.x - line3.x), line3.y + startProportion * (line1.y - line3.y))
    c.stroke()
    c.closePath()

}

function drawChord3(){
    startProportion = Math.random()

    c.beginPath()
    c.lineWidth = 3
    c.strokeStyle = getAColor()
    c.moveTo(line3.x + startProportion * (line1.x - line3.x), line3.y + startProportion * (line1.y - line3.y))
    c.lineTo(line1.x + startProportion * (line2.x - line1.x), line1.y + startProportion * (line2.y - line1.y))
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
