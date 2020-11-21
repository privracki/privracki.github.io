function toggle(class);

let hidden = 1, // All image elements are hidden by default.
	allImages = document.getElementsByTagName('img');

function toggle(class) {
	let imagesByClass = document.getElementsByClassName(class);

	if (hidden == 0)
		for (let i = 0; i < images.length; ++i)
			allImages[i].style.display = "none";
	else
		for (let i = 0; i < images.length; ++i)
			images[i].style.display = "block";
		hidden = 0;
}
