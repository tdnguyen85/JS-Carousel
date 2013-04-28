/*
<img src="http://www.spikelupton.co.uk/Resources/100_1641.jpg" id="image" />
		<img src="http://www.spikelupton.co.uk/Resources/100_3369.jpg" />
		<img src="http://www.spikelupton.co.uk/Resources/100_4187.jpg" />
		<img src="http://www.spikelupton.co.uk/Resources/IMG_1851.jpg" />
		["http://www.spikelupton.co.uk/Resources/100_1641.jpg", "http://www.spikelupton.co.uk/Resources/100_3369.jpg", "http://www.spikelupton.co.uk/Resources/100_4187.jpg", "http://www.spikelupton.co.uk/Resources/IMG_1851.jpg"];
*/
var image = document.getElementById('image');
var imageArrayTag = document.getElementsByTagName('img');
var imageArray = [];
var tracker;
image.style.opacity = 1;

for (i=0; i<imageArrayTag.length; i+=1) {
	imageArray.push(imageArrayTag[i].src);
}

var imageIndexFunction = function() {
	var nextImage;
	var currentImage;
	var previousImage;
	for(i=0; i < imageArray.length; i+=1) {
		if (image.src === imageArray[i]) {
			currentImage = imageArrayTag[i];
			if (image.src === imageArray[imageArray.length - 1]) {
				nextImage = imageArrayTag[0];
				previousImage = imageArrayTag[i-1];
			} else if (image.src === imageArray[0]) {
				nextImage = imageArrayTag[i+1];
				previousImage = imageArrayTag[imageArray.length - 1];
			} else {
				nextImage = imageArrayTag[i+1];
				previousImage = imageArrayTag[i-1];
			}
		} 
	}
	return {
				'nextImage': nextImage,
				'currentImage': currentImage,
				'previousImage': previousImage
			};
};
var imageIndex = imageIndexFunction();
var imageCurrent = imageIndex.currentImage;
var imageNext = imageIndex.nextImage;
var imagePrevious = imageIndex.previousImage;

function setOpacity() {
	imageNext.style.opacity = 0;
	imagePrevious.style.opacity = 0;
}
function animate() {
	
	imageCurrent.style.opacity = 1;
	function changeImage() {
		if (imageNext.style.opacity === 0) {

		}
)
		if (image.style.opacity <= 0) {
		return;
		}
		imageCurrent.style.opacity -= 0.01;
		imageNext.style.opacity += 0.01;
		imagePrevious.style.opacity += 0.01;
		
		}
	var timer = setInterval(changeImage, 10);
	function stopMoving() {clearInterval(timer);}
	setTimeout( stopMoving, 4000);
}


function next() {
	image.style.opacity = 1;
	for(i=0; i < imageArray.length; i+=1) {
		if (image.src === imageArray[i]) {
			if (image.src === imageArray[imageArray.length - 1]) {
				tracker = imageArray[0];
			} else {
				tracker = imageArray[i+1];
			} 
		}
	}
	return (image.src = tracker);
}
function previous() {
	image.style.opacity = 1;
	for(i=0; i < imageArray.length; i+=1) {
		if (image.src === imageArray[i]) {
			if (image.src === imageArray[0]) {
				tracker = imageArray[imageArray.length - 1];
			} else {
				tracker = imageArray[i-1];
			} 
		}
	}
	return (image.src = tracker);
}