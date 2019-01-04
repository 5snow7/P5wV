
let lines=[];let vs,vf;

function setup(){
	can=createCanvas(windowWidth-100,windowHeight-100);
	can.position(25,25);can.mousePressed(nextlevel);
	can.class("bdd");

	vs=createVector(0,0); vf=createVector(800,0);
    lines.push(new kochline(vs,vf));	
}
	
	
function draw(){
	background(200,200,0);
	translate(100,400);
    for(let j=0;j<lines.length;j++){lines[j].show();}
	}
	
function nextlevel(){
	generate();	
}