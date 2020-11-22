let hidden = 1, // All image elements are hidden by default.
	allImages = document.getElementsByTagName('img');

function toggle(class) {
	let imagesByClass = document.getElementsByClassName(class);

	if (hidden === 0) {
		for (let i = 0; i < allImages.length; ++i)
			allImages[i].style.display = "none";
		hidden = 1;
	}
	for (let i = 0; i < imagesByClass.length; ++i)
		imagesByClass[i].style.display = "block";
	hidden = 0;
}
