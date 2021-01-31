var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
Player_y = 10;
var plyer_object = "";
function player_update()
{
  fabric.Image.fromURL("https://www.pngfind.com/pngs/m/42-424341_baby-groot-png-transparent-png.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    plyer_object.scaleToHeight(450);
    player_object.set({
      top:player_y,
      left:player_x
    });
    canvas.add(plyer_object);
    
  })
}
var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
Player_y = 10;
var plyer_object = "";
function player_update()
{
  fabric.Image.fromURL("https://e7.pngegg.com/pngimages/501/313/png-clipart-ironman-ironman-thumbnail.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    plyer_object.scaleToHeight(450);
    player_object.set({
      top:player_y,
      left:player_x
    });
    canvas.add(plyer_object);
    
  })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}

	if(keyPressed == '70')
	{
		new_image('ironman_face.png');
		console.log("f");
	}
	if(keyPressed == '87')
	{
		new_image('https://m.gjcdn.net/user-avatar/200/4724787-tcsegvfu-v4.jpg'); 
		console.log("w");
	}
	if(keyPressed == '72')
	{
		new_image('captain_america_left_hand.png'); 
		console.log("h");
	}
	if(keyPressed == '76')
	{
		new_image('hulk_legs.png'); 
		console.log("l");
	}
	
	if(keyPressed == '82')
	{
		new_image('thor_right_hand.png'); 
		console.log("r");
	}

	if(keyPressed == '66')
	{
		new_image('spiderman_body.png'); 
		console.log("b");
	}
	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}