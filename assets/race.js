var variable = 0;
var arr_length = 12;
var merge_array = new Array("0","B","A","3","2","8","4","7","6","5","1","9");
var merge_start = 0;
var merge_length = 2;


// var sortArray = ["0","B","A","3","2","8","4","7","6","5","1","9","0","A","9","8","1","A","3","9","2","0","1","1",
//  "1","6","3","8","9","4","0","A","5","2","B","7","1","9","8","4","1","B","3","8","2","6","2","5",
//  "2","9","7","B","4","0","1","6","3","8","A","5","2","6","1","0","9","4","8","7","8","6","2","6",
//  "3","4","5","7","1","9","2","0","6","8","B","A","3","5","6","A","A","0","2","3","B","7","2","4",
//  "4","0","6","0","7","9","A","2","1","8","3","5","4","B","B","0","6","5","6","6","7","1","0","A",
//  "5","2","8","1","A","B","3","4","7","9","0","6","5","7","5","0","6","8","4","B","8","9","3","4"];

// part1 = new Array("0","B","A","3","2","8","4","7","6","5","1","9");
// part2 = new Array("0","A","9","8","1","A","3","9","2","0","1","1");
// part3 = new Array("1","6","3","8","9","4","0","A","5","2","B","7");
// part4 = new Array("1","9","8","4","1","B","3","8","2","6","2","5");
// part5 = new Array("2","9","7","B","4","0","1","6","3","8","A","5");
// part6 = new Array("2","6","1","0","9","4","8","7","8","6","2","6");
// part7 = new Array("3","4","5","7","1","9","2","0","6","8","B","A");
// part8 = new Array("3","5","6","A","A","0","2","3","B","7","2","4");
// part9 = new Array("4","0","6","0","7","9","A","2","1","8","3","5");
// part10 = new Array("4","B","B","0","6","5","6","6","7","1","0","A");
// part11 = new Array("5","2","8","1","A","B","3","4","7","9","0","6");
// part12 = new Array("5","7","5","0","6","8","4","B","8","9","3","4");

function draw_grid( rctx, rminor, rmajor, rstroke, rfill  )
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        //if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        //if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore( );
}
function draw_rect( ctx, stroke, fill ){
    stroke = stroke || 'lightgrey';
    fill = fill || 'dimgrey';
    ctx.save( );
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    ctx.rect(40, 50, canvas.width - 90, canvas.height - 100);
    ctx.stroke();
    ctx.fill();
    ctx.restore( );
}

function draw_array( actx, disp_array, x, y ){
    actx.save( );
    var curr_array_string = disp_array.join("  ");
    hex_sort(1,'a');
    actx.fillStyle = 'black';
    actx.font = "10px Arial";
    actx.fillText( curr_array_string, x, y );
    actx.restore( );
}

function pass(){
    //continue;
}

function stepInsertionSort(){
    //continue;
}

function stepMergeSort(){
//arr_length = 12;
//merge_array = new Array("0","B","A","3","2","8","4","7","6","5","1","9");
//var merge_start = 0;
//var merge_length = 2;
//sub_array_length = 1;

    /*
        check elements with sub array of merge_length
        if sub_array_length == 1
            if (!hex_sort(array[merger start], array[merge_start+1] )
                swap     
            merge_start +2;
        
        if sub_array_length == 2

            do crap

        if sub_array_length == 4

            do crap

        if (merge_start == 12)
            merger_start = 0
            sub_array_length * 2
        if sub_array_length = 8
            done    
        
    */
}

function stepQuicksort(){
    
}

function hex_sort(hex_one, hex_two){
    if((parseInt(hex_one, 16)) > (parseInt(hex_two, 16))){
        return true;
    }
    else{
        return false;
    }
}

function mergeSort (arr) {
    if (arr.length < 2) {
      return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var subLeft = mergeSort(arr.slice(0, mid));
    var subRight = mergeSort(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge (node1, node2) {
    var result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0]? node1.shift() : node2.shift());
    return result.concat(node1.length? node1 : node2);
}