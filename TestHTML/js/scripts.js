function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

// var myVinyls_1 = {
//     "American high defense node-CF": 7,
//     "US VU provider-jp1": 12,
//     "XX Network Technology Co., Ltd.-HK1": 4,
// };

var myVinyls_2 = {
    "American high defense node-CF": 5,
    "US VU provider-jp1": 17,
    "XX Network Technology Co., Ltd.-HK1": 8,
};

var myVinyls_3 = {
    "American high defense node-CF": 4,
    "US VU provider-jp1": 9,
    "XX Network Technology Co., Ltd.-HK1": 7,
};

var Piechart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
 
    this.draw = function(){
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.options.data){
            var val = this.options.data[categ];
            total_value += val;
        }
 
        var start_angle = 0;
        for (categ in this.options.data){
            val = this.options.data[categ];
            var slice_angle = 2 * Math.PI * val / total_value;
 
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );
 
            start_angle += slice_angle;
            color_index++;
        }
 
    }
}

// var myPiechart_1 = new Piechart(
//     {
//         canvas:myCanvas1,
//         data:myVinyls_1,
//         colors:["#3eb642","#319734", "#4cda50"]
//     }
// );
// myPiechart_1.draw();

var myPiechart_2 = new Piechart(
    {
        canvas:myCanvas2,
        data:myVinyls_2,
        colors:["#3eb642","#319734", "#4cda50"]
    }
);
myPiechart_2.draw();

var myPiechart_3 = new Piechart(
    {
        canvas:myCanvas3,
        data:myVinyls_3,
        colors:["#3eb642","#319734", "#4cda50"]
    }
);
myPiechart_3.draw();