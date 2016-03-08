function CreateImage(filename,caption){
    var line1="";
    var line1=line1+'<div class="col-md-6">';
    var line1=line1+'<div class="project-image">';
    var line1=line1+'<img src="assets/img/'+filename+'" onclick="OpenLightbox(\'assets/img/'+filename+'\',\''+caption+'\'); return false" />';
    var line1=line1+'</div>';
    var line1=line1+'</div>';
    document.write(line1);
}

function OpenLightbox(filename,caption) {
    document.getElementById('lightboximage').src="";
    document.getElementById('lightboximage').src=filename;
    document.getElementById('lighboxcaption').innerHTML=caption+"<br><br>Click anywhere to close";
} 

function LoadLightbox() {
    document.getElementById('lightboxwindow').style.display='block'; 
} 

function CloseLightbox() { 
    document.getElementById('lightboxwindow').style.display='none'; 
}

