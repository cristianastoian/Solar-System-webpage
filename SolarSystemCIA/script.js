window.onload = function()
{
let sunVideo = document.getElementById('sunVideo')
let mercuryVideo = document.getElementById('mercuryVideo')
let venusVideo = document.getElementById('venusVideo')
let earthVideo = document.getElementById('earthVideo')
let marsVideo = document.getElementById('marsVideo')
let jupiterVideo = document.getElementById('jupiterVideo')
let saturnVideo = document.getElementById('saturnVideo')
let uranusVideo = document.getElementById('uranusVideo')
let neptuneVideo = document.getElementById('neptuneVideo')



let canvas = document.getElementById('videoCanvas')
let canvasContext = canvas.getContext('2d')


let sunPlay = document.getElementById('sun-button')
let mercuryPlay = document.getElementById('mercury-button')
let venusPlay = document.getElementById('venus-button')
let earthPlay = document.getElementById('earth-button')
let marsPlay = document.getElementById('mars-button')
let jupiterPlay = document.getElementById('jupiter-button')
let saturnPlay = document.getElementById('saturn-button')
let uranusPlay = document.getElementById('uranus-button')
let neptunePlay = document.getElementById('neptune-button')


sunPlay.addEventListener('click', ()=>{
  console.log("button clicked");
    sunVideo.play();
    sunRender();
  })
venusPlay.addEventListener('click', ()=>{
    venusVideo.play();
    venusRender();
  })

mercuryPlay.addEventListener('click', ()=>{
  mercuryVideo.play();
  mercuryRender();
})
earthPlay.addEventListener('click', ()=>{
  earthVideo.play();
  earthRender();
})
marsPlay.addEventListener('click', ()=>{
  marsVideo.play();
  marsRender();
})
jupiterPlay.addEventListener('click', ()=>{
  jupiterVideo.play();
  jupiterRender();
})
saturnPlay.addEventListener('click', ()=>{
  saturnVideo.play();
  saturnRender();
})
uranusPlay.addEventListener('click', ()=>{
  uranusVideo.play();
  uranusRender();
})
neptunePlay.addEventListener('click', ()=>{
  neptuneVideo.play();
  neptuneRender();
})



  sunVideo.addEventListener('play', function() {
    sunRender();
  });
  venusVideo.addEventListener('play', function() {
    venusRender();
  });
  mercuryVideo.addEventListener('play', function() {
    mercuryRender();
  });
  earthVideo.addEventListener('play', function() {
    earthRender();
  });
  marsVideo.addEventListener('play', function() {
    marsRender();
  });
  jupiterVideo.addEventListener('play', function() {
    jupiterRender();
  });
  saturnVideo.addEventListener('play', function() {
    saturnRender();
  });
  uranusVideo.addEventListener('play', function() {
    uranusRender();
  });
  neptuneVideo.addEventListener('play', function() {
    neptuneRender();
  });



  function sunRender() {
    renderSunCanvasContext();
    requestAnimationFrame(sunRender);
  }
  function venusRender() {
    renderVenusCanvasContext();
    requestAnimationFrame(venusRender);
  }
  function mercuryRender() {
    renderMercuryCanvasContext();
    requestAnimationFrame(mercuryRender);
  }
  function earthRender() {
    renderEarthCanvasContext();
    requestAnimationFrame(earthRender);
  }
  function marsRender() {
    renderMarsCanvasContext();
    requestAnimationFrame(marsRender);
  }
  function jupiterRender() {
    renderJupiterCanvasContext();
    requestAnimationFrame(jupiterRender);
  }
  function saturnRender() {
    renderSaturnCanvasContext();
    requestAnimationFrame(saturnRender);
  }
  function uranusRender() {
    renderUranusCanvasContext();
    requestAnimationFrame(uranusRender);
  }
  function neptuneRender() {
    renderNeptuneCanvasContext();
    requestAnimationFrame(neptuneRender);
  }


  function renderSunCanvasContext() {
    canvasContext.drawImage(sunVideo, 0, 0, canvas.width, canvas.height);
  }
  function renderVenusCanvasContext() {
    canvasContext.drawImage(venusVideo, 0, 0, canvas.width, canvas.height);
  }
  function renderMercuryCanvasContext() {
    canvasContext.drawImage(mercuryVideo, 0, 0, canvas.width, canvas.height);
  }
  function renderEarthCanvasContext() {
    canvasContext.drawImage(earthVideo, 0, 0, canvas.width, canvas.height);
  }
  function renderMarsCanvasContext() {
    canvasContext.drawImage(marsVideo, 0, 0, canvas.width, canvas.height);
  }
  function renderJupiterCanvasContext() {
    canvasContext.drawImage(jupiterVideo, 0, 0, canvas.width, canvas.height);
  }
  function renderSaturnCanvasContext() {
    canvasContext.drawImage(saturnVideo, 0, 0, canvas.width, canvas.height);
  }
  function renderUranusCanvasContext() {
    canvasContext.drawImage(uranusVideo, 0, 0, canvas.width, canvas.height);
  }
  function renderNeptuneCanvasContext() {
    canvasContext.drawImage(neptuneVideo, 0, 0, canvas.width, canvas.height);
  }



 

 



const sunButton=document.getElementById('sun-button');
const mercuryButton=document.getElementById('mercury-button');
const venusButton=document.getElementById('venus-button');
const earthButton=document.getElementById('earth-button');
const marsButton=document.getElementById('mars-button');
const jupiterButton=document.getElementById('jupiter-button');
const saturnButton=document.getElementById('saturn-button');
const uranusButton=document.getElementById('uranus-button');
const neptuneButton=document.getElementById('neptune-button');


//FAILED attempt at a modal to show information:


//const openModalButtons = document.querySelectorAll('[data-modal-target]')
//const closeModalButtons = document.querySelectorAll('[data-close-button]')
//const overlay = document.getElementById('overlay')
///const modal = document.getElementById('modal')
//openModalButtons.forEach(button => {
 // button.addEventListener('click', () => {
  //  console.log('Button clicked');
  ///  const modal = document.querySelector(button.dataset.modalTarget)
  //  openModal(modal)
 // })
//})


//overlay.addEventListener('click', () => {
 // const modals = document.querySelectorAll('.modal.active')
//  modals.forEach(modal => {
 //   closeModal(modal)
 // })
//})


//closeModalButtons.forEach(button => {
 // button.addEventListener('click', () => {
 //   const modal = button.closest('.modal')
 //   closeModal(modal)
//  })
//})


//function openModal(modal) {
//  if (modal == null) return
//  modal.classList.add('active')
 // overlay.classList.add('active')
//}


//function closeModal(modal) {
 // if (modal == null) return
 // modal.classList.remove('active')
 // overlay.classList.remove('active')
//}
//});


//test to see if the buttons are being clicked:
sunButton.addEventListener('click', ()=>{
console.log("button clicked");
})
mercuryButton.addEventListener('click', ()=>{
  console.log("button clicked");
})
earthButton.addEventListener('click', ()=>{
  console.log("button clicked");
})
venusButton.addEventListener('click', ()=>{
  console.log("button clicked");
})
marsButton.addEventListener('click', ()=>{
  console.log("button clicked");
})
jupiterButton.addEventListener('click', ()=>{
  console.log("button clicked");
})
saturnButton.addEventListener('click', ()=>{
  console.log("button clicked");
})
uranusButton.addEventListener('click', ()=>{
  console.log("button clicked");
})
neptuneButton.addEventListener('click', ()=>{
  console.log("button clicked");
})
//for the popover:
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


//making popover disapear at next click:
const popover = new bootstrap.Popover('.popover-dismiss', {
  trigger: 'focus'
})
 
}
