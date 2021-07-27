const liImagesA = document.querySelectorAll(".thumbnails li a");
const liImages = document.querySelectorAll(".slides img, .slides video, .slides a");
const service = new Service(true, 0);

// si no se ve bien la imagen del video en thumbnails
// updateVideo();

$(document).on("mouseover", ".image-active", function() {
    service.hover = false;
    console.log(service.hover);
});

$(document).on("mouseout", ".image-active", function() {
    service.hover = true;
    console.log(service.hover);
});

setInterval(function() {
    if (service.x >= liImagesA.length) {
        service.x = 0;
    }
    for (let index = 0; index < liImagesA.length; index++) {
        if (service.hover) {
            liImagesA[index].classList.remove("active");
            liImages[index].parentElement.classList.remove("image-active");
            liImages[index].parentElement.classList.add("no-image-active");
        }
    }
    if (service.hover) {
        liImagesA[service.x].classList.add("active");
    }
    for (let index = 0; index < liImages.length; index++) {
        const thumbnail = liImagesA[service.x].getAttribute("href").replace('#', '');
        const slide = liImages[index].parentElement.getAttribute("id");
        if (thumbnail === slide && service.hover) {
            liImages[index].parentElement.classList.add("image-active");
            liImages[index].parentElement.classList.remove("no-image-active");
        }
    }
    if (service.hover) {
        service.x = service.x + 1; 
    }   
}, 3000);
for (const i in liImagesA) {
    if (Object.hasOwnProperty.call(liImagesA, i)) {
        liImagesA[i].addEventListener("click", function() {
            for (let index = 0; index < liImagesA.length; index++) {
                liImagesA[index].classList.remove("active");
                liImages[index].parentElement.classList.remove("image-active");
                liImages[index].parentElement.classList.add("no-image-active");
            }
            this.classList.add("active");
            liImages[i].parentElement.classList.add("image-active");
            liImages[i].parentElement.classList.remove("no-image-active");
            service.x = parseInt(this.getAttribute("href").replace("#slide", ''))-1;
        });
    }
}

// function updateVideo( ) {
//     var canvas = document.getElementById( 'canvas' );
//     var ctx = canvas.getContext( '2d' );
//     var myVideo = document.getElementById( 'video' );
//     ctx.drawImage( myVideo, 0, 0, 640, 480 );
// }