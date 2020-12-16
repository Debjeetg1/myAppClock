var sc , hr , mn , ml;


function setup()
{
  createCanvas(displayWidth , displayHeight);

 angleMode(DEGREES);



}

function draw()
{
  background(0)
  
 

  sc = second();
  hr = hour() % 12;
  mn = minute();
  ml = Math.round(millis());

     
 fill(100 , 100 , 255);
 strokeWeight(150)
 textSize(50);
 text(nf( hr,2 ) , 600 , 560  );
 text(" :" , 640 , 560  );
 

 fill(100 , 255 , 100);
 strokeWeight(150)
 textSize(50);
 text(nf(mn,2 ) , 670 , 560  )
 text(" :" , 710 , 560  );

 fill(255 , 100 , 100);
 strokeWeight(150)
 textSize(50);
 text(nf(sc , 2) , 740 , 560  )
 text(" :" , 780 , 560  )




 translate(700 , 350) 
 rotate(270)

 
  strokeWeight(20)
  stroke(255 ,100 , 100);
  noFill();



  let scAngle = map(sc ,  0 ,60 , 0 , 360);
  arc(0,0, 550 ,550 ,  0 , scAngle );



  let mnAngle = map(mn , 0 , 60 , 0 , 360);
  stroke(100 , 255 , 100);
  arc(0,0 , 500 ,500,  0 , mnAngle)

  let hrAngle = map(hr % 12 , 0 , 12 , 0 , 360);
  stroke(100 , 100 , 255);
  arc(0,0, 450 , 450, 0 , hrAngle)

  let mlAngle = map(ml , 0 , 1000 , 0 , 360);
  stroke(200 , 250, 250);
  arc(0,0, 600 , 600, 0 , mlAngle)


 push();
  strokeWeight(10);
  stroke(255 ,100 , 100)
  rotate(scAngle);
  line(0 , 0 , 150 ,0);
 
 pop();

 push();
 strokeWeight(10);
 stroke(100 ,255, 100)
 rotate(mnAngle);
 line(0 , 0 , 130 ,0);

pop();

push();
strokeWeight(10);
stroke(100 ,100 , 255)
rotate(hrAngle);
line(0 , 0 , 70 ,0);

pop();

push();
strokeWeight(7);
stroke(200 , 250, 250)
rotate(mlAngle);
line(0 , 0 , 170 ,0);

pop();
 
 

  
}