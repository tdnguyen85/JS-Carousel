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
var nextImg;
var currentImg;
var previousImg;
var imageIndexFunction = function() {
	for(i=0; i < imageArray.length; i+=1) {
		if (image.src === imageArray[i]) {
			currentImg = imageArrayTag[i];
			if (image.src === imageArray[imageArray.length - 1]) {
				nextImg = imageArrayTag[0];
				previousImg = imageArrayTag[i-1];
			} else if (image.src === imageArray[0]) {
				nextImg = imageArrayTag[i+1];
				previousImg = imageArrayTag[imageArray.length - 1];
			} else {
				nextImg = imageArrayTag[i+1];
				previousImg = imageArrayTag[i-1];
			}
		} 
	}
	return {
				'nextImage': nextImg,
				'currentImage': currentImg,
				'previousImage': previousImg
			};
};
var imageIndex = imageIndexFunction();
var imageCurrent = imageIndex.currentImage;
var imageNext = imageIndex.nextImage;
var imagePrevious = imageIndex.previousImage;

function next() {
	//setOpacityZero();
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
	setOpacityZero();
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
function setOpacityOne() {
	image = document.getElementById('image');
	image.style.opacity = 1;
}
function setOpacityZero() {
	imageCurrent.style.opacity = 0;
	changeNextPrevious();
}
function animateCurrent() {
	setOpacityOne();
	function changeOneToZero() {
		if (imageCurrent.style.opacity > 0) {
		imageCurrent.style.opacity -= 0.02;
		}
	}
	var timer = setInterval(changeOneToZero, 70);
	function stopMoving() {clearInterval(timer);}
	setTimeout(stopMoving, 2500);
}
function changeNextPrevious() {
	function changeZeroToOne() {
		if (imageCurrent.style.opacity <= 1) {
		imageCurrent.style.opacity = (imageCurrent.style.opacity + 0.04);
						console.log(imageCurrent.style.opacity);

		}
	}
	var timer = setInterval(changeZeroToOne, 70);
	console.log('ending');
	function stopMoving() {clearInterval(timer);}
	setTimeout(stopMoving, 2500);
}
function opacityChangeNext() {
	animateCurrent();
	setTimeout(next, 2600);
	setTimeout(setOpacityZero, 2600);
	//setTimeout(changeNextPrevious, 2700);
}

	
	