class grainFilter{

    constructor(w, h){
        this.w = w;
        this.h = h;

        this.img = createGraphics(w, h);
        
        for(let x = 0; x < this.w; x++){
            for(let y = 0; y < this.h; y++){

                if(floor(random(3)) == 0){
                    this.img.stroke(255, 10);
                }else{
                    this.img.stroke(0, 10);
                }

                this.img.point(x, y);

                
            }
        }

    }
}