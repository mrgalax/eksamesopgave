var win = Titanium.UI.currentWindow;
 
var backbutton = Titanium.UI.createButton({
    top:5,
    title:'Close window',
    height:50
});
 
backbutton.addEventListener('click',function(){
    win.close()
});
 
 var label4 = Titanium.UI.createLabel({
 	
	
	 backgroundImage: '../AustFlag3.jpg',

	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
 
win.add(label4);
win.add(backbutton);


