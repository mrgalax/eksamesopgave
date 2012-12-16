// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#000'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'her er tap 1.',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
var button20 = Ti.UI.createButton({
	title: 'button20',
	top: '50dp',
	left: '10dp',
	right: '10',
	height: '40dp',
	
})
win1.add(button20);

button20.addEventListener('click', function(e) {
	
 var mads = Titanium.UI.createWindow({
	title:'mads',
	url:'newwin.js'
});
mads.open();

});


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win2
});
 
var data = [];
for (i = 0 ; i < 30 ; i++)
    data.push({title:'Row n°' + i, color:'#000'});
    
    title:'abe';
 
var tableView1 = Titanium.UI.createTableView({
    data:data
});
 
tableView1.addEventListener('click',function(row){
 
    var newWindow = Titanium.UI.createWindow({
        url:'window.js',
        backgroundColor:'#FFF'
    });
    newWindow.open();
});
 
win2.add(tableView1);



var win3 = Titanium.UI.createWindow({  
    title:'Tab 3',
    backgroundColor:'#000'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 3',
    window:win3
});

var label3 = Titanium.UI.createLabel({
	color:'#c8c8c8',
	font: {
		fotSize: 35
	},
	text:'ruld ned',
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: '10dp',
	height: 'auto',
	width: 'auto'
});
var createUserButton = Ti.UI.createButton({
	backgroundImage:'../aus.jpg',
	color:'#DC143C',
	title: '',
	top: '30dp',
	left: '75dp',
	right: '75',
	height: '50dp',
	
})

createUserButton.addEventListener('click', function(a) {
	
 var mads = Titanium.UI.createWindow({
	title:'mads',
	url:'newwin.js'
});



mads.open();

});


 

var createUserButton1 = Ti.UI.createButton({
	backgroundImage:'../austria.jpg',
	color:'#ffff',
	title: '',
	top: '5dp',
	left: '75dp',
	right: '75',
	height: '50dp',
})
var createUserButton2 = Ti.UI.createButton({
	backgroundImage:'../bel.jpg',
	color:'#000000000',
	title: '',
	top: '5dp',
	left: '75dp',
	right: '75',
	height: '50dp',
})

var createUserButton3 = Ti.UI.createButton({
	backgroundImage:'../can.jpg',
	color:'#000000000',
	title: '',
	top: '5dp',
	left: '75dp',
	right: '75',
	height: '50dp',
})


var createUserButton4 = Ti.UI.createButton({
	backgroundImage:'../china.jpg',
	color:'#000000000',
	title: '',
	top: '5dp',
	left: '75dp',
	right: '75',
	height: '50dp',
})


var createUserButton5 = Ti.UI.createButton({
	backgroundImage:'../den.png',
	color:'#000000000',
	title: '',
	top: '5dp',
	left: '75dp',
	right: '75',
	height: '50dp',
})


var createUserButton6 = Ti.UI.createButton({
	color:'#4100CC',
	title: 'Finland',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})

var createUserButton7 = Ti.UI.createButton({
	color:'#DC143C',
	title: 'France',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})
var createUserButton8 = Ti.UI.createButton({
	color:'#000000',
	title: 'Germany',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})

var createUserButton9 = Ti.UI.createButton({
	color:'#ffff',
	title: 'Iceland',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})

var createUserButton10 = Ti.UI.createButton({
	title: 'Japan',
	color:'#DC143C',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})

var createUserButton11 = Ti.UI.createButton({
	color:'#DC143C',
	title: 'Italy',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})
var createUserButton12 = Ti.UI.createButton({
	color:'#fffff',
	title: 'Netherlands',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})

var createUserButton13 = Ti.UI.createButton({
	color:'#DC143C',
	title: 'New Zealand',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})

var createUserButton14 = Ti.UI.createButton({
	color:'#4100CC',
	title: 'Norway',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})
var createUserButton15 = Ti.UI.createButton({
	color:'#EEE000',
	title: 'Spain',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})

var createUserButton16 = Ti.UI.createButton({
	color:'#4100CC',
	title: 'Sweden',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})

var createUserButton17 = Ti.UI.createButton({
	color:'#ffff',
	title: 'Switzerland',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})

var createUserButton18 = Ti.UI.createButton({
	color:'#FF1100',
	title: 'United Kingdom',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})


var createUserButton19 = Ti.UI.createButton({
	color:'#4100CC',
	title: 'United States',
	top: '1dp',
	left: '10dp',
	right: '10',
	height: '40dp',
})



var scrollView = Ti.UI.createScrollView({
	layout: 'vertical'
});

var channel = Ti.UI.createTextField({
	hintText:'Skriv en kommentar her.',
	top: '10dp',
	left: '10dp',
	right: '10dp',
	height: '40dp',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
	autocorrect:false
});

win3.add(label3);
win3.add(scrollView);
win3.add(createUserButton);
win3.add(createUserButton1);
win3.add(createUserButton2);
win3.add(createUserButton3);
win3.add(createUserButton4);
win3.add(createUserButton5);
win3.add(createUserButton6);
win3.add(createUserButton6);
win3.add(createUserButton7);
win3.add(createUserButton8);
win3.add(createUserButton9);
win3.add(createUserButton10);
win3.add(createUserButton12);
win3.add(createUserButton13);
win3.add(createUserButton14);
win3.add(createUserButton15);
win3.add(createUserButton16);
win3.add(createUserButton17);
win3.add(createUserButton18);
win3.add(createUserButton19);
scrollView.add(createUserButton);
scrollView.add(createUserButton1);
scrollView.add(createUserButton2);
scrollView.add(createUserButton3);
scrollView.add(createUserButton4);
scrollView.add(createUserButton5);
scrollView.add(createUserButton6);
scrollView.add(createUserButton7);
scrollView.add(createUserButton8);
scrollView.add(createUserButton9);
scrollView.add(createUserButton10);
scrollView.add(createUserButton11);
scrollView.add(createUserButton12);
scrollView.add(createUserButton13);
scrollView.add(createUserButton14);
scrollView.add(createUserButton15);
scrollView.add(createUserButton16);
scrollView.add(createUserButton17);
scrollView.add(createUserButton18);
scrollView.add(createUserButton19);

scrollView.add(channel);


var win4 = Titanium.UI.createWindow({  
    title:'Tab 4',
    backgroundColor:'#fff'
});
var tab4 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 4',
    window:win4
});

var label4 = Titanium.UI.createLabel({
	color:'#999',
	text:'og også 4',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win4.add(label4);


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  
tabGroup.addTab(tab4);  



// open tab group
tabGroup.open();
