let myimage = document.getElementById('person');
let images = ['https://cdn.glitch.global/28de0718-b3de-4309-9a65-3beeb97f8131/finalperson2.png?v=1645135035468',
              'https://cdn.glitch.global/28de0718-b3de-4309-9a65-3beeb97f8131/finalperson1.png?v=1645135115459',
              'https://cdn.glitch.global/28de0718-b3de-4309-9a65-3beeb97f8131/newboot1.png?v=1645133029755',
             'https://cdn.glitch.global/28de0718-b3de-4309-9a65-3beeb97f8131/newboot2.png?v=1645133040280',
             'https://cdn.glitch.global/28de0718-b3de-4309-9a65-3beeb97f8131/newhandcolor.png?v=1645126322950',
             'https://cdn.glitch.global/28de0718-b3de-4309-9a65-3beeb97f8131/newhandpink.png?v=1645126337618',
             'https://cdn.glitch.global/28de0718-b3de-4309-9a65-3beeb97f8131/newthing1.png?v=1645135728196',
             'https://cdn.glitch.global/28de0718-b3de-4309-9a65-3beeb97f8131/newthing2.png?v=1645135792384',];

function changeMyImage() {      
  let currentimagesrc = myimage.src;       
  if (currentimagesrc == images[1]) {         
    myimage.src = images[0];     } 
  else {         myimage.src = images[1];     } }  
setInterval(changeMyImage, 1000);


let myboot = document.getElementById('boot');
function changeMyImage2() {      
  let currentimagesrc = myboot.src;       
  if (currentimagesrc == images[2]) {         
    myboot.src = images[3];     } 
  else {         myboot.src = images[2];     } }  
setInterval(changeMyImage2, 1000);

let myhand = document.getElementById('hand');
function changeMyImage3() {      
  let currentimagesrc = myhand.src;       
  if (currentimagesrc == images[4]) {         
    myhand.src = images[5];     } 
  else {         myhand.src = images[4];     } }  
setInterval(changeMyImage3, 1000);

let mything = document.getElementById('thing');
function changeMyImage4() {      
  let currentimagesrc = mything.src;       
  if (currentimagesrc == images[6]) {         
    mything.src = images[7];     } 
  else {         mything.src = images[6];     } }  
setInterval(changeMyImage4, 1000);