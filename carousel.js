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
/*
function setOnLoad() {
	image = document.getElementById('image');
	imageArrayTag = document.getElementsByTagName('img');
	for (i=0; i<imageArrayTag.length; i+=1) {
	imageArray.push(imageArrayTag[i].src);
	}
}
*/
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
function setMainOpacity() {
	image = document.getElementById('image');
	image.style.opacity = 1;
}
function setOpacity() {
		setMainOpacity();

	imageNext.style.opacity = 0;
	imagePrevious.style.opacity = 0;
}
function animateCurrent() {
	setMainOpacity();
	setOpacity();
	function changeCurrent() {
		if (imageCurrent.style.opacity > 0) {
		imageCurrent.style.opacity -= 0.01;
		}
	}
	function changeNext() {
		if (imageNext.style.opacity <= 1) {
		imageNext.style.opacity += 0.01;
		}
	}
	var timer = setInterval(changeCurrent, 50);
	function stopMoving() {clearInterval(timer);}
	setTimeout(stopMoving, 3000);
	setTimeout(next, 3050);
}
function animateNext() {
	function changeNext() {
		if (imageNext.style.opacity <= 1) {
		imageNext.style.opacity += 0.01;
		}
	}
	var timer = setInterval(changeNext, 50);
}
function animatePrevious() {
	function changePrevious() {
		if (imagePrevious.style.opacity <= 1) {
		imagePrevious.style.opacity += 0.01;
		}
	}
	var timer = setInterval(changePrevious, 50);
}
	
	/*
	function stopMoving() {clearInterval(timer);}
	setTimeout( stopMoving, 3000);
	
	var timer2 = setInterval(changeImageNext, 40);
	*/
