
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let colors = {
    0: '#ff0000',
    1: '#ff9600',
    2: '#ffff00',
    3: '#00ff00',
    4: '#0000ff',
    5: '#6400c8'
}
let inverted = false
let realHopStartX = 0
let hopStartX = 0
let toDoJumpsDiameter = []
let toDoJumpsBackwards = []
let jump = 1
//put your code here
function move(hopDiameter, moveBackwards){
       toDoJumpsDiameter.push(hopDiameter)
       toDoJumpsBackwards.push(moveBackwards) 
       if(!moveBackwards){
        hopStartX += hopDiameter
    }
    else{
        hopStartX -= hopDiameter
    }
    }
function realMove(hopDiameter, moveBackwards) {
    if(hopDiameter <= 100){
    toDoJumpsDiameter.splice(0,1)
    toDoJumpsBackwards.splice(0,1)
    let moveForwards;
    if(moveBackwards){
            moveForwards = false
        }
        else{
            moveForwards = true
        }
    let hopR = hopDiameter/2
    let realRealHopStartX = realHopStartX*10
    let grad = ctx.createLinearGradient(0,0,3000,1500)
    grad.addColorStop(0,colors[0])
    grad.addColorStop(0.1,colors[1])
    grad.addColorStop(0.2,colors[2])
    grad.addColorStop(0.3,colors[3])
    grad.addColorStop(0.4,colors[4])
    grad.addColorStop(0.5,colors[5])
    grad.addColorStop(0.6,colors[0])
    grad.addColorStop(0.7,colors[1])
    grad.addColorStop(0.8,colors[2])
    grad.addColorStop(0.9,colors[3])
    grad.addColorStop(1,colors[4])
    ctx.lineWidth = 2
    ctx.strokeStyle = grad
    hopR = hopR * 10
    let hopCenX;
    if(moveForwards){
         hopCenX = realRealHopStartX + hopR
    }
    else{
        hopCenX = realRealHopStartX - hopR
    }
    if(inverted && moveForwards){
        ctx.beginPath()
        ctx.arc(hopCenX, 750, hopR, 0, Math.PI)
        ctx.stroke()
    }
    else if(!inverted && moveForwards){
        ctx.beginPath()
        ctx.arc(hopCenX, 750, hopR, 0, Math.PI, true)
        ctx.stroke()
    }
    else if(inverted && !moveForwards){
        ctx.beginPath()
        ctx.arc(hopCenX, 750, hopR, 0, Math.PI)
        ctx.stroke()
    }
    else{
        ctx.beginPath()
        ctx.arc(hopCenX, 750, hopR, 0, Math.PI, true)
        ctx.stroke()
    }

    if(inverted){
        inverted = false
    }
    else{
        inverted = true
    }
    if(moveForwards){
        realHopStartX += hopDiameter
    }
    else{
        realHopStartX -= hopDiameter
    }
    setTimeout(realMove, 70,toDoJumpsDiameter[0],toDoJumpsBackwards[0])
    }
    else{
        console.log("The Sequnce Is Complete")
        return null
    
}
}
setTimeout(realMove, 70,toDoJumpsDiameter[0],toDoJumpsBackwards[0])