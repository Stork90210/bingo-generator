var imageFiles = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpg",
    "images/19.jpg",
    "images/20.jpg",
    "images/21.jpg",
    "images/22.jpg",
    "images/23.jpg",
    "images/24.jpg",
    "images/25.jpg",
    "images/26.jpg",
    "images/27.jpg",
    "images/28.jpg",
    "images/29.jpg",
    "images/30.jpg",
    "images/31.jpg",
    "images/32.jpg",
    "images/33.jpg",
    "images/34.jpg",
    "images/35.jpg",
    "images/36.jpg",
    "images/37.jpg",
    "images/38.jpg",
    "images/39.jpg",
    "images/40.jpg",
    "images/41.jpg",
    "images/42.jpg",
    "images/43.jpg",
    "images/44.jpg",
    "images/45.jpg",
    "images/46.jpg",
    "images/47.jpg",
    "images/48.jpg",
    "images/49.jpg",
    "images/50.jpg",
    "images/51.jpg",
    "images/52.jpg",
    "images/53.jpg",
    "images/54.jpg",
    "images/55.jpg",
    "images/56.jpg",
    "images/57.jpg",
    "images/58.jpg",
    "images/59.jpg",
    "images/60.jpg",
    "images/61.jpg",
    "images/62.jpg",
    "images/63.jpg",
    "images/64.jpg",
    "images/65.jpg",
    "images/66.jpg",
    "images/67.jpg",
    "images/68.jpg",
    "images/69.jpg",
    "images/70.jpg",
    "images/71.jpg",
    "images/72.jpg",
    "images/73.jpg",
    "images/74.jpg",
    "images/75.jpg",];

var imgArray = [];
let image; 

subArray = getRandomSubarray(imageFiles, 25);
console.log(subArray);

for (i = 0; i < 25; i++) {
    image = new Image();
    image.src = subArray[i];
    imgArray.push(image);
    console.log(image)
}

function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}


function drawCard(width, height, squares){
    let c = document.getElementById("bingoKaart");
    let ctx = c.getContext("2d");  
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    
    image.onload = function() {
        for (i = 0; i < 5; i++) {
            for (j = 0; j < 5; j++) {
                ctx.drawImage(imgArray[j+i*5],width/squares*i+1,height/squares*j+1,width/squares-2,height/squares-2)
            }
        }
    }
       // ctx.drawImage(imgArray[0],0,0,width/squares,height/squares);

    
    
    for (i = 0; i < squares; i++){
        ctx.beginPath();
        ctx.moveTo(width/squares*i, 0);
        ctx.lineTo(width/squares*i, height);
        ctx.stroke();
    }
    for (i = 0; i < squares; i++){
        ctx.beginPath();
        ctx.moveTo(0, height/squares*i);
        ctx.lineTo(width, height/squares*i);
        ctx.stroke();
    }
}

drawCard(800,800,5);
