function change_property(obj) {
	var which_btn = obj.innerHTML;
	
	if (which_btn == "Reduce") {
		document.getElementById("box").style="padding:30px";
	}	
	else if (which_btn == "Enlarge") {
		document.getElementById("box").style="padding:200px";
	}	
	else if (which_btn == "Hide") {
		document.getElementById("box").style="display:none";
	}	
	else if (which_btn == "Show") {
		document.getElementById("box").style="display:block";
	}

	document.getElementById("reduce").disabled=false;
	document.getElementById("enlarge").disabled=false;
	document.getElementById("show").disabled=false;
	document.getElementById("hide").disabled=false;
	obj.disabled=true;

	document.getElementById("colortype").style="display:none";

}	


function display_dropdown() {
	document.getElementById("colortype").style="display:inline";
	document.getElementById("reduce").disabled=false;
	document.getElementById("enlarge").disabled=false;
	document.getElementById("show").disabled=false;
	document.getElementById("hide").disabled=false;
}

function change_color() {
	var colorType = document.getElementById("colortype").value;
	document.getElementById("box").style ="background-color:"+colorType;
}
