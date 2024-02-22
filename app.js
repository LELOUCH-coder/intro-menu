/* for menu button */
const menu=document.querySelector(".btn");
const crossbtn=document.querySelector(".cross-btn");
const white=document.querySelector(".white-space");

menu.addEventListener("click",function(){
	white.classList.add("show-white-space");
});



crossbtn.addEventListener("click",function(){
	white.classList.remove("show-white-space");
});



/*  for options features*/
const fea=document.querySelectorAll(".fea");
const arrow=document.querySelectorAll(".arrow");



fea.forEach(function(btn){ 
	btn.addEventListener("click",function(e){
		const ans=e.currentTarget.parentElement.parentElement;
	ans.classList.toggle("show");
	});
});

arrow.forEach(function(btn){
	btn.addEventListener("click",function(e){
		const ans=e.currentTarget.parentElement.parentElement;
	ans.classList.toggle("show");
	});
});






