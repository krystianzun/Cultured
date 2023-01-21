
// WIP: Generate image for an array // 
var arrayImg = new Array();
arrayImg[0] = "100x100";
arrayImg[1] = "150x150";
arrayImg[2] = "200x200";
arrayImg[3] = "250x250";
arrayImg[4] = "300x300";
arrayImg[5] = "350x350";
arrayImg[6] = "400x400";


// Test function: show image // 
function picture(){ 
    var pic = "https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3552&q=80"
    document.getElementById('bigpic').src = pic.replace('90x90', '225x225');
    document.getElementById('bigpic').style.display='block';

}