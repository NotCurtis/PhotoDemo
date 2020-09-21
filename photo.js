class Photo {
    constructor(width=8, height=10){
    this.width = width;
    this.height = height;
    }
    get_Price() {
        var price = 10;
        if(this.width == 8 && this.height == 10){
            price = 4;
        }else if(this.width == 10 && this.height == 12){
            price = 6;
        }
        return price;
    }
    to_String(){
        return "This is a "+this.width+"\" by "+this.height+"\" photo and it costs $"+this.get_Price()+".";
    }
}

pic = new Photo(10,12);
pic2 = new Photo();
pic3 = new Photo(14,20);
console.log(pic.to_String());
console.log(pic2.to_String());
console.log(pic3.to_String());

