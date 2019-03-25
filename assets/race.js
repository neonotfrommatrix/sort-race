var arr_length = 12;                //length of array
var winner = null;                  //holds winner name when it is declared
var merge_start = 0;                //position within array to start sort at
var merge_sub_array_length = 1;     //position within sorting algorithm


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

function draw_array( actx, temp_arr, x, y ){
    actx.save( );
    var curr_array_string = temp_arr.join("  ");
    actx.fillStyle = 'black';
    actx.font = "10px Arial";
    actx.fillText( curr_array_string, x, y );
    actx.restore( );
}

function hex_sort(hex_one, hex_two){
    if((parseInt(hex_one, 16)) > (parseInt(hex_two, 16))){      
        return true;
    }
    else{
        return false;
    }
}

function stepInsertionSort(){
    //continue;
}

function stepQuicksort(){
    //continue;
}

//uses sub_array length to decide sorting intensity, sorts first by 3 then 6 to sort all 12 items.
function stepMergeSort(){
    if(merge_sub_array_length == 1){
        if (hex_sort(merge_array[merge_start], merge_array[merge_start+1])){
            var temp = merge_array[merge_start];
            merge_array[merge_start] = merge_array[merge_start + 1];
            merge_array[merge_start + 1] = temp;
        }
        merge_start += 3;
        if(merge_start == arr_length){
            merge_sub_array_length = 2;
            merge_start = 0;
        }
        return;
    }
    else if(merge_sub_array_length == 2){
        if(hex_sort(merge_array[merge_start], merge_array[merge_start+2])){
            var temp = merge_array[merge_start];
            var temp2 = merge_array[merge_start + 1];
            merge_array[merge_start] = merge_array[merge_start + 2];
            merge_array[merge_start + 1] = temp;
            merge_array[merge_start + 2] = temp2;
        }
        else if (hex_sort(merge_array[merge_start+1], merge_array[merge_start+2])){
            var temp = merge_array[merge_start+1];
            merge_array[merge_start+1] = merge_array[merge_start + 2];
            merge_array[merge_start + 2] = temp;
        }
        merge_start += 3;
        if(merge_start == arr_length){
            merge_sub_array_length = 3;
            merge_start = 0;
        }
        return;
    }
    else if(merge_sub_array_length == 3){
        if(hex_sort(merge_array[merge_start], merge_array[merge_start+3])){
            var temp = merge_array[merge_start];
            var temp2 = merge_array[merge_start + 1];
            var temp3 = merge_array[merge_start + 2];
            merge_array[merge_start] = merge_array[merge_start + 3];
            merge_array[merge_start + 1] = temp;
            merge_array[merge_start + 2] = temp2;
            merge_array[merge_start + 3] = temp3;
        }
        else if (hex_sort(merge_array[merge_start + 1], merge_array[merge_start+3])){
            var temp = merge_array[merge_start + 1];
            var temp2 = merge_array[merge_start + 2];
            merge_array[merge_start + 1] = merge_array[merge_start + 3];
            merge_array[merge_start + 2] = temp;
            merge_array[merge_start + 3] = temp2;
        }
        else if (hex_sort(merge_array[merge_start + 2], merge_array[merge_start+3])){
            var temp = merge_array[merge_start + 2];
            merge_array[merge_start + 2] = merge_array[merge_start + 3];
            merge_array[merge_start + 3] = temp;
        }
        else if(hex_sort(merge_array[merge_start + 1], merge_array[merge_start + 4])){
            var temp = merge_array[merge_start + 1];
            var temp2 = merge_array[merge_start + 2];
            var temp3 = merge_array[merge_start + 3];
            merge_array[merge_start + 1] = merge_array[merge_start + 4];
            merge_array[merge_start + 2] = temp;
            merge_array[merge_start + 3] = temp2;
            merge_array[merge_start + 4] = temp3;
        }
        else if (hex_sort(merge_array[merge_start + 2], merge_array[merge_start+4])){
            var temp = merge_array[merge_start + 2];
            var temp2 = merge_array[merge_start + 3];
            merge_array[merge_start + 2] = merge_array[merge_start + 4];
            merge_array[merge_start + 3] = temp;
            merge_array[merge_start + 4] = temp2;
        }
        else if (hex_sort(merge_array[merge_start + 3], merge_array[merge_start+4])){
            var temp = merge_array[merge_start + 3];
            merge_array[merge_start + 3] = merge_array[merge_start + 4];
            merge_array[merge_start + 4] = temp;
        }
        else if(hex_sort(merge_array[merge_start + 2], merge_array[merge_start + 5])){
            var temp = merge_array[merge_start + 2];
            var temp2 = merge_array[merge_start + 3];
            var temp3 = merge_array[merge_start + 4];
            merge_array[merge_start + 2] = merge_array[merge_start + 5];
            merge_array[merge_start + 3] = temp;
            merge_array[merge_start + 4] = temp2;
            merge_array[merge_start + 5] = temp3;
        }
        else if (hex_sort(merge_array[merge_start + 3], merge_array[merge_start+5])){
            var temp = merge_array[merge_start + 3];
            var temp2 = merge_array[merge_start + 4];
            merge_array[merge_start + 3] = merge_array[merge_start + 5];
            merge_array[merge_start + 4] = temp;
            merge_array[merge_start + 5] = temp2;
        }
        else if (hex_sort(merge_array[merge_start + 4], merge_array[merge_start+5])){
            var temp = merge_array[merge_start + 4];
            merge_array[merge_start + 4] = merge_array[merge_start + 5];
            merge_array[merge_start + 5] = temp;
        }
        else{
            merge_start += 6;
        }
        if(merge_start == arr_length){
            merge_sub_array_length = 6;
            merge_start = 0;
        }
        return;
    }
    else if(merge_sub_array_length == 6){
        if(hex_sort(merge_array[merge_start], merge_array[merge_start+6])){
            var temp = merge_array[merge_start];
            var temp2 = merge_array[merge_start + 1];
            var temp3 = merge_array[merge_start + 2];
            var temp4 = merge_array[merge_start + 3];
            var temp5 = merge_array[merge_start + 4];
            var temp6 = merge_array[merge_start + 5];
            merge_array[merge_start] = merge_array[merge_start + 6];
            merge_array[merge_start + 1] = temp;
            merge_array[merge_start + 2] = temp2;
            merge_array[merge_start + 3] = temp3;
            merge_array[merge_start + 4] = temp4;
            merge_array[merge_start + 5] = temp5;
            merge_array[merge_start + 6] = temp6;
        }
        else if(hex_sort(merge_array[merge_start + 1], merge_array[merge_start+6])){
            var temp = merge_array[merge_start + 1];
            var temp2 = merge_array[merge_start + 2];
            var temp3 = merge_array[merge_start + 3];
            var temp4 = merge_array[merge_start + 4];
            var temp5 = merge_array[merge_start + 5];
            merge_array[merge_start+1] = merge_array[merge_start + 6];
            merge_array[merge_start + 2] = temp;
            merge_array[merge_start + 3] = temp2;
            merge_array[merge_start + 4] = temp3;
            merge_array[merge_start + 5] = temp4;
            merge_array[merge_start + 6] = temp5;
        }
        else if(hex_sort(merge_array[merge_start + 2], merge_array[merge_start+6])){
            var temp = merge_array[merge_start + 2];
            var temp2 = merge_array[merge_start + 3];
            var temp3 = merge_array[merge_start + 4];
            var temp4 = merge_array[merge_start + 5];
            merge_array[merge_start + 2] = merge_array[merge_start + 6];
            merge_array[merge_start + 3] = temp;
            merge_array[merge_start + 4] = temp2;
            merge_array[merge_start + 5] = temp3;
            merge_array[merge_start + 6] = temp4;
        }
        else if(hex_sort(merge_array[merge_start + 3], merge_array[merge_start+6])){
            var temp = merge_array[merge_start + 3];
            var temp2 = merge_array[merge_start + 4];
            var temp3 = merge_array[merge_start + 5];
            merge_array[merge_start + 3] = merge_array[merge_start + 6];
            merge_array[merge_start + 4] = temp;
            merge_array[merge_start + 5] = temp2;
            merge_array[merge_start + 6] = temp3;
        }
        else if(hex_sort(merge_array[merge_start + 4], merge_array[merge_start+6])){
            var temp = merge_array[merge_start + 4];
            var temp2 = merge_array[merge_start + 5];
            merge_array[merge_start + 4] = merge_array[merge_start + 6];
            merge_array[merge_start + 5] = temp;
            merge_array[merge_start + 6] = temp2;
        }
        else if(hex_sort(merge_array[merge_start + 5], merge_array[merge_start+6])){
            var temp = merge_array[merge_start + 5];
            merge_array[merge_start + 5] = merge_array[merge_start + 6];
            merge_array[merge_start + 6] = temp;
        }
        else if(hex_sort(merge_array[merge_start + 1], merge_array[merge_start+7])){
            var temp = merge_array[merge_start + 1];
            var temp2 = merge_array[merge_start + 2];
            var temp3 = merge_array[merge_start + 3];
            var temp4 = merge_array[merge_start + 4];
            var temp5 = merge_array[merge_start + 5];
            var temp6 = merge_array[merge_start + 6];
            merge_array[merge_start + 1] = merge_array[merge_start + 7];
            merge_array[merge_start + 2] = temp;
            merge_array[merge_start + 3] = temp2;
            merge_array[merge_start + 4] = temp3;
            merge_array[merge_start + 5] = temp4;
            merge_array[merge_start + 6] = temp5;
            merge_array[merge_start + 7] = temp6;
        }
        else if(hex_sort(merge_array[merge_start + 2], merge_array[merge_start+7])){
            var temp = merge_array[merge_start + 2];
            var temp2 = merge_array[merge_start + 3];
            var temp3 = merge_array[merge_start + 4];
            var temp4 = merge_array[merge_start + 5];
            var temp5 = merge_array[merge_start + 6];
            merge_array[merge_start + 2] = merge_array[merge_start + 7];
            merge_array[merge_start + 3] = temp;
            merge_array[merge_start + 4] = temp2;
            merge_array[merge_start + 5] = temp3;
            merge_array[merge_start + 6] = temp4;
            merge_array[merge_start + 7] = temp5;
        }
        else if(hex_sort(merge_array[merge_start + 3], merge_array[merge_start+7])){
            var temp = merge_array[merge_start + 3];
            var temp2 = merge_array[merge_start + 4];
            var temp3 = merge_array[merge_start + 5];
            var temp4 = merge_array[merge_start + 6];
            merge_array[merge_start + 3] = merge_array[merge_start + 7];
            merge_array[merge_start + 4] = temp;
            merge_array[merge_start + 5] = temp2;
            merge_array[merge_start + 6] = temp3;
            merge_array[merge_start + 7] = temp4;
        }
        else if(hex_sort(merge_array[merge_start + 4], merge_array[merge_start + 7])){
            var temp = merge_array[merge_start + 4];
            var temp2 = merge_array[merge_start + 5];
            var temp3 = merge_array[merge_start + 6];
            merge_array[merge_start + 4] = merge_array[merge_start + 7];
            merge_array[merge_start + 5] = temp;
            merge_array[merge_start + 6] = temp2;
            merge_array[merge_start + 7] = temp3;
        }
        else if(hex_sort(merge_array[merge_start + 5], merge_array[merge_start + 7])){
            var temp = merge_array[merge_start + 5];
            var temp2 = merge_array[merge_start + 6];
            merge_array[merge_start + 5] = merge_array[merge_start + 7];
            merge_array[merge_start + 6] = temp;
            merge_array[merge_start + 7] = temp2;
        }
        else if(hex_sort(merge_array[merge_start + 6], merge_array[merge_start + 7])){
            var temp = merge_array[merge_start + 6];
            merge_array[merge_start + 6] = merge_array[merge_start + 7];
            merge_array[merge_start + 7] = temp;
        }
        else if(hex_sort(merge_array[merge_start + 2], merge_array[merge_start+8])){
            var temp = merge_array[merge_start + 2];
            var temp2 = merge_array[merge_start + 3];
            var temp3 = merge_array[merge_start + 4];
            var temp4 = merge_array[merge_start + 5];
            var temp5 = merge_array[merge_start + 6];
            var temp6 = merge_array[merge_start + 7];
            merge_array[merge_start + 2] = merge_array[merge_start + 8];
            merge_array[merge_start + 3] = temp;
            merge_array[merge_start + 4] = temp2;
            merge_array[merge_start + 5] = temp3;
            merge_array[merge_start + 6] = temp4;
            merge_array[merge_start + 7] = temp5;
            merge_array[merge_start + 8] = temp6;
        }
        else if(hex_sort(merge_array[merge_start + 3], merge_array[merge_start + 8])){
            var temp = merge_array[merge_start + 3];
            var temp2 = merge_array[merge_start + 4];
            var temp3 = merge_array[merge_start + 5];
            var temp4 = merge_array[merge_start + 6];
            var temp5 = merge_array[merge_start + 7];
            merge_array[merge_start + 3] = merge_array[merge_start + 8];
            merge_array[merge_start + 4] = temp;
            merge_array[merge_start + 5] = temp2;
            merge_array[merge_start + 6] = temp3;
            merge_array[merge_start + 7] = temp4;
            merge_array[merge_start + 8] = temp5;
        }
        else if(hex_sort(merge_array[merge_start + 4], merge_array[merge_start+8])){
            var temp = merge_array[merge_start + 4];
            var temp2 = merge_array[merge_start + 5];
            var temp3 = merge_array[merge_start + 6];
            var temp4 = merge_array[merge_start + 7];
            merge_array[merge_start + 4] = merge_array[merge_start + 8];
            merge_array[merge_start + 5] = temp;
            merge_array[merge_start + 6] = temp2;
            merge_array[merge_start + 7] = temp3;
            merge_array[merge_start + 8] = temp4;
        }
        else if(hex_sort(merge_array[merge_start + 5], merge_array[merge_start + 8])){
            var temp = merge_array[merge_start + 5];
            var temp2 = merge_array[merge_start + 6];
            var temp3 = merge_array[merge_start + 7];
            merge_array[merge_start + 5] = merge_array[merge_start + 8];
            merge_array[merge_start + 6] = temp;
            merge_array[merge_start + 7] = temp2;
            merge_array[merge_start + 8] = temp3;
        }
        else if(hex_sort(merge_array[merge_start + 6], merge_array[merge_start + 8])){
            var temp = merge_array[merge_start + 6];
            var temp2 = merge_array[merge_start + 7];
            merge_array[merge_start + 6] = merge_array[merge_start + 8];
            merge_array[merge_start + 7] = temp;
            merge_array[merge_start + 8] = temp2;
        }
        else if(hex_sort(merge_array[merge_start + 7], merge_array[merge_start + 8])){
            var temp = merge_array[merge_start + 7];
            merge_array[merge_start + 7] = merge_array[merge_start + 8];
            merge_array[merge_start + 8] = temp;
        }
        else if(hex_sort(merge_array[merge_start + 3], merge_array[merge_start+9])){
            var temp = merge_array[merge_start + 3];
            var temp2 = merge_array[merge_start + 4];
            var temp3 = merge_array[merge_start + 5];
            var temp4 = merge_array[merge_start + 6];
            var temp5 = merge_array[merge_start + 7];
            var temp6 = merge_array[merge_start + 8];
            merge_array[merge_start + 3] = merge_array[merge_start + 9];
            merge_array[merge_start + 4] = temp;
            merge_array[merge_start + 5] = temp2;
            merge_array[merge_start + 6] = temp3;
            merge_array[merge_start + 7] = temp4;
            merge_array[merge_start + 8] = temp5;
            merge_array[merge_start + 9] = temp6;
        }
        else if(hex_sort(merge_array[merge_start + 4], merge_array[merge_start + 9])){
            var temp = merge_array[merge_start + 4];
            var temp2 = merge_array[merge_start + 5];
            var temp3 = merge_array[merge_start + 6];
            var temp4 = merge_array[merge_start + 7];
            var temp5 = merge_array[merge_start + 8];
            merge_array[merge_start + 4] = merge_array[merge_start + 9];
            merge_array[merge_start + 5] = temp;
            merge_array[merge_start + 6] = temp2;
            merge_array[merge_start + 7] = temp3;
            merge_array[merge_start + 8] = temp4;
            merge_array[merge_start + 9] = temp5;
        }
        else if(hex_sort(merge_array[merge_start + 5], merge_array[merge_start+9])){
            var temp = merge_array[merge_start + 5];
            var temp2 = merge_array[merge_start + 6];
            var temp3 = merge_array[merge_start + 7];
            var temp4 = merge_array[merge_start + 8];
            merge_array[merge_start + 5] = merge_array[merge_start + 9];
            merge_array[merge_start + 6] = temp;
            merge_array[merge_start + 7] = temp2;
            merge_array[merge_start + 8] = temp3;
            merge_array[merge_start + 9] = temp4;
        }
        else if(hex_sort(merge_array[merge_start + 6], merge_array[merge_start + 9])){
            var temp = merge_array[merge_start + 6];
            var temp2 = merge_array[merge_start + 7];
            var temp3 = merge_array[merge_start + 8];
            merge_array[merge_start + 6] = merge_array[merge_start + 9];
            merge_array[merge_start + 7] = temp;
            merge_array[merge_start + 8] = temp2;
            merge_array[merge_start + 9] = temp3;
        }
        else if(hex_sort(merge_array[merge_start + 7], merge_array[merge_start + 9])){
            var temp = merge_array[merge_start + 7];
            var temp2 = merge_array[merge_start + 8];
            merge_array[merge_start + 7] = merge_array[merge_start + 9];
            merge_array[merge_start + 8] = temp;
            merge_array[merge_start + 9] = temp2;
        }
        else if(hex_sort(merge_array[merge_start + 8], merge_array[merge_start + 9])){
            var temp = merge_array[merge_start + 8];
            merge_array[merge_start + 8] = merge_array[merge_start + 9];
            merge_array[merge_start + 9] = temp;
        }
        else if(hex_sort(merge_array[merge_start + 4], merge_array[merge_start + 10])){
            var temp = merge_array[merge_start + 4];
            var temp2 = merge_array[merge_start + 5];
            var temp3 = merge_array[merge_start + 6];
            var temp4 = merge_array[merge_start + 7];
            var temp5 = merge_array[merge_start + 8];
            var temp6 = merge_array[merge_start + 9];
            merge_array[merge_start + 4] = merge_array[merge_start + 10];
            merge_array[merge_start + 5] = temp;
            merge_array[merge_start + 6] = temp2;
            merge_array[merge_start + 7] = temp3;
            merge_array[merge_start + 8] = temp4;
            merge_array[merge_start + 9] = temp5;
            merge_array[merge_start + 10] = temp6;
        }
        else if(hex_sort(merge_array[merge_start + 5], merge_array[merge_start + 10])){
            var temp = merge_array[merge_start + 5];
            var temp2 = merge_array[merge_start + 6];
            var temp3 = merge_array[merge_start + 7];
            var temp4 = merge_array[merge_start + 8];
            var temp5 = merge_array[merge_start + 9];
            merge_array[merge_start + 5] = merge_array[merge_start + 10];
            merge_array[merge_start + 6] = temp;
            merge_array[merge_start + 7] = temp2;
            merge_array[merge_start + 8] = temp3;
            merge_array[merge_start + 9] = temp4;
            merge_array[merge_start + 10] = temp5;
        }
        else if(hex_sort(merge_array[merge_start + 6], merge_array[merge_start + 10])){
            var temp = merge_array[merge_start + 6];
            var temp2 = merge_array[merge_start + 7];
            var temp3 = merge_array[merge_start + 8];
            var temp4 = merge_array[merge_start + 9];
            merge_array[merge_start + 6] = merge_array[merge_start + 10];
            merge_array[merge_start + 7] = temp;
            merge_array[merge_start + 8] = temp2;
            merge_array[merge_start + 9] = temp3;
            merge_array[merge_start + 10] = temp4;
        }
        else if(hex_sort(merge_array[merge_start + 7], merge_array[merge_start + 10])){
            var temp = merge_array[merge_start + 7];
            var temp2 = merge_array[merge_start + 8];
            var temp3 = merge_array[merge_start + 9];
            merge_array[merge_start + 7] = merge_array[merge_start + 10];
            merge_array[merge_start + 8] = temp;
            merge_array[merge_start + 9] = temp2;
            merge_array[merge_start + 10] = temp3;
        }
        else if(hex_sort(merge_array[merge_start + 8], merge_array[merge_start + 10])){
            var temp = merge_array[merge_start + 8];
            var temp2 = merge_array[merge_start + 9];
            merge_array[merge_start + 8] = merge_array[merge_start + 10];
            merge_array[merge_start + 9] = temp;
            merge_array[merge_start + 10] = temp2;
        }
        else if(hex_sort(merge_array[merge_start + 9], merge_array[merge_start + 10])){
            var temp = merge_array[merge_start + 9];
            merge_array[merge_start + 9] = merge_array[merge_start + 10];
            merge_array[merge_start + 10] = temp;
        }
        else if(hex_sort(merge_array[merge_start + 5], merge_array[merge_start + 11])){
            var temp = merge_array[merge_start + 5];
            var temp2 = merge_array[merge_start + 6];
            var temp3 = merge_array[merge_start + 7];
            var temp4 = merge_array[merge_start + 8];
            var temp5 = merge_array[merge_start + 9];
            var temp6 = merge_array[merge_start + 10];
            merge_array[merge_start + 5] = merge_array[merge_start + 11];
            merge_array[merge_start + 6] = temp;
            merge_array[merge_start + 7] = temp2;
            merge_array[merge_start + 8] = temp3;
            merge_array[merge_start + 9] = temp4;
            merge_array[merge_start + 10] = temp5;
            merge_array[merge_start + 11] = temp6;
        }
        else if(hex_sort(merge_array[merge_start + 6], merge_array[merge_start + 11])){
            var temp = merge_array[merge_start + 6];
            var temp2 = merge_array[merge_start + 7];
            var temp3 = merge_array[merge_start + 8];
            var temp4 = merge_array[merge_start + 9];
            var temp5 = merge_array[merge_start + 10];
            merge_array[merge_start + 6] = merge_array[merge_start + 11];
            merge_array[merge_start + 7] = temp;
            merge_array[merge_start + 8] = temp2;
            merge_array[merge_start + 9] = temp3;
            merge_array[merge_start + 10] = temp4;
            merge_array[merge_start + 11] = temp5;
        }
        else if(hex_sort(merge_array[merge_start + 7], merge_array[merge_start + 11])){
            var temp = merge_array[merge_start + 7];
            var temp2 = merge_array[merge_start + 8];
            var temp3 = merge_array[merge_start + 9];
            var temp4 = merge_array[merge_start + 10];
            merge_array[merge_start + 7] = merge_array[merge_start + 11];
            merge_array[merge_start + 8] = temp;
            merge_array[merge_start + 9] = temp2;
            merge_array[merge_start + 10] = temp3;
            merge_array[merge_start + 11] = temp4;
        }
        else if(hex_sort(merge_array[merge_start + 8], merge_array[merge_start + 11])){
            var temp = merge_array[merge_start + 8];
            var temp2 = merge_array[merge_start + 9];
            var temp3 = merge_array[merge_start + 10];
            merge_array[merge_start + 8] = merge_array[merge_start + 11];
            merge_array[merge_start + 9] = temp;
            merge_array[merge_start + 10] = temp2;
            merge_array[merge_start + 11] = temp3;
        }
        else if(hex_sort(merge_array[merge_start + 9], merge_array[merge_start + 11])){
            var temp = merge_array[merge_start + 9];
            var temp2 = merge_array[merge_start + 10];
            merge_array[merge_start + 9] = merge_array[merge_start + 11];
            merge_array[merge_start + 10] = temp;
            merge_array[merge_start + 11] = temp2;
        }
        else if(hex_sort(merge_array[merge_start + 10], merge_array[merge_start + 11])){
            var temp = merge_array[merge_start + 10];
            merge_array[merge_start + 10] = merge_array[merge_start + 11];
            merge_array[merge_start + 11] = temp;
        }
        else if(hex_sort(merge_array[merge_start + 6], merge_array[merge_start + 12])){
            var temp = merge_array[merge_start + 6];
            var temp2 = merge_array[merge_start + 7];
            var temp3 = merge_array[merge_start + 8];
            var temp4 = merge_array[merge_start + 9];
            var temp5 = merge_array[merge_start + 10];
            var temp6 = merge_array[merge_start + 11];
            merge_array[merge_start + 6] = merge_array[merge_start + 12];
            merge_array[merge_start + 7] = temp;
            merge_array[merge_start + 8] = temp2;
            merge_array[merge_start + 9] = temp3;
            merge_array[merge_start + 10] = temp4;
            merge_array[merge_start + 11] = temp5;
            merge_array[merge_start + 12] = temp6;
        }
        else if(hex_sort(merge_array[merge_start + 7], merge_array[merge_start + 12])){
            var temp = merge_array[merge_start + 7];
            var temp2 = merge_array[merge_start + 8];
            var temp3 = merge_array[merge_start + 9];
            var temp4 = merge_array[merge_start + 10];
            var temp5 = merge_array[merge_start + 11];
            merge_array[merge_start + 7] = merge_array[merge_start + 12];
            merge_array[merge_start + 8] = temp;
            merge_array[merge_start + 9] = temp2;
            merge_array[merge_start + 10] = temp3;
            merge_array[merge_start + 11] = temp4;
            merge_array[merge_start + 12] = temp5;
        }
        else if(hex_sort(merge_array[merge_start + 8], merge_array[merge_start + 12])){
            var temp = merge_array[merge_start + 8];
            var temp2 = merge_array[merge_start + 9];
            var temp3 = merge_array[merge_start + 10];
            var temp4 = merge_array[merge_start + 11];
            merge_array[merge_start + 8] = merge_array[merge_start + 12];
            merge_array[merge_start + 9] = temp;
            merge_array[merge_start + 10] = temp2;
            merge_array[merge_start + 11] = temp3;
            merge_array[merge_start + 12] = temp4;
        }
        else if(hex_sort(merge_array[merge_start + 9], merge_array[merge_start + 12])){
            var temp = merge_array[merge_start + 9];
            var temp2 = merge_array[merge_start + 10];
            var temp3 = merge_array[merge_start + 11];
            merge_array[merge_start + 9] = merge_array[merge_start + 12];
            merge_array[merge_start + 10] = temp;
            merge_array[merge_start + 11] = temp2;
            merge_array[merge_start + 12] = temp3;
        }
        else if(hex_sort(merge_array[merge_start + 10], merge_array[merge_start + 12])){
            var temp = merge_array[merge_start + 10];
            var temp2 = merge_array[merge_start + 11];
            merge_array[merge_start + 10] = merge_array[merge_start + 12];
            merge_array[merge_start + 11] = temp;
            merge_array[merge_start + 12] = temp2;
        }
        else if(hex_sort(merge_array[merge_start + 11], merge_array[merge_start + 12])){
            var temp = merge_array[merge_start + 11];
            merge_array[merge_start + 11] = merge_array[merge_start + 12];
            merge_array[merge_start + 12] = temp;
        }
        else {
            winner = "merge";
        }
        return;
    }

}


