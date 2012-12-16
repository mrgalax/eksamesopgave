var win = Titanium.UI.currentWindow ;
var backbutton = Titanium.UI.createButton({
    top:5,
    title:'Close window',
    height:50
});
 
backbutton.addEventListener('click',function(){
    win.close();
});
 
win.add(backbutton);