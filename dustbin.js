class Dustbin extends BaseClass {
  constructor() {
    
    var options =  {
      isStatic: true,

    }
    super(700,640,100);
    this.body = Bodies.rectangle(700,600,400,options)
    
   
    this.image = loadImage("images/dustbingreen.png")
   
   
  }
 
  
  }

