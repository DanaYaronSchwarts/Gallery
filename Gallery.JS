var xhr = new XMLHttpRequest();



xhr.open("GET", "https://jsonplaceholder.typicode.com/albums/1/photos", true);
xhr.send();

xhr.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
	  
	const myObj = JSON.parse(this.responseText);
	const rowForImages = document.getElementById("row");
	
	myObj.forEach(function(i)
	{
	rowForImages.innerHTML += `<div class="column">
	<img src="${i.thumbnailUrl}" alt="${i.title}" style="width:100%" onclick="changeOnClick('${i.title}','${i.url}');">
	</div>`;
	});

  }
};

function changeOnClick(title, url) 
{
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = url;
  imgText.innerHTML = title;
  expandImg.parentElement.style.display = "block";
}

