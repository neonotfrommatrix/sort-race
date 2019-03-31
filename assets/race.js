var arr_length = 12;                //length of array
var winner = null;                  //holds winner name when it is declared
var merge_start = 0;                //position within array to start sort at
var merge_sub_array_length = 1;     //position within sorting algorithm
var merge_x = 0;
var merge_y = 0;

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

function swap(x, y){
    var temp = merge_array[merge_start + x];
    for(    ; y > 0; y--,x--){
        merge_array[merge_start + x] = merge_array[merge_start + x - 1];
    }
    merge_array[merge_start + x] = temp;
}

//uses sub_array length to decide sorting intensity, sorts first by 3 then 6 to sort all 12 items.
function stepMergeSort(){
    if(merge_sub_array_length == 1){
        if (hex_sort(merge_array[merge_start], merge_array[merge_start+1])){
            swap(1,1);
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
            swap(2,2);
        }
        else if (hex_sort(merge_array[merge_start+1], merge_array[merge_start+2])){
            swap(2,1);
        }
        merge_start += 3;
        if(merge_start == arr_length){
            merge_sub_array_length = 3;
            merge_start = 0;
            merge_x = merge_sub_array_length;
            merge_y = merge_x;
        }
        return;
    }
    else if(merge_sub_array_length == 3){
        
        /*  // Test a function to remove if - else if - else
        var notDone = true;
        
        while(notDone){
            if(hex_sort(merge_array[merge_start], merge_array[merge_start+merge_sub_array_length])){
                swap(merge_x,merge_y);
                notDone = false;
            }
            merge_y -= 1;
            if(merge_y = 0){
                merge_y = merge_sub_array_length;
                merge_x +=1;
            }
            if(merge_x == merge_sub_array_length * 2){
                merge_start += 6
            }
            if(merge_start == arr_length){
                merge_sub_array_length = 6;
                merge_start = 0;
                notDone = false;
            }
        }
        */
        
        if(hex_sort(merge_array[merge_start], merge_array[merge_start+3])){
            swap(3, 3);
        }
        else if (hex_sort(merge_array[merge_start + 1], merge_array[merge_start+3])){
            swap(3, 2);
        }
        else if (hex_sort(merge_array[merge_start + 2], merge_array[merge_start+3])){
            swap(3, 1);
        }
        else if(hex_sort(merge_array[merge_start + 1], merge_array[merge_start + 4])){
            swap(4, 3);
        }
        else if (hex_sort(merge_array[merge_start + 2], merge_array[merge_start+4])){
            swap(4, 2);
        }
        else if (hex_sort(merge_array[merge_start + 3], merge_array[merge_start+4])){
            swap(4, 1);
        }
        else if(hex_sort(merge_array[merge_start + 2], merge_array[merge_start + 5])){
            swap(5, 3);
        }
        else if (hex_sort(merge_array[merge_start + 3], merge_array[merge_start+5])){
            swap(5, 2);
        }
        else if (hex_sort(merge_array[merge_start + 4], merge_array[merge_start+5])){
            swap(5, 1);
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
            swap(6,6);
        }
        else if(hex_sort(merge_array[merge_start + 1], merge_array[merge_start+6])){
            swap(6, 5);
        }
        else if(hex_sort(merge_array[merge_start + 2], merge_array[merge_start+6])){
            swap(6, 4);
        }
        else if(hex_sort(merge_array[merge_start + 3], merge_array[merge_start+6])){
            swap(6, 3);
        }
        else if(hex_sort(merge_array[merge_start + 4], merge_array[merge_start+6])){
            swap(6, 2);
        }
        else if(hex_sort(merge_array[merge_start + 5], merge_array[merge_start+6])){
            swap(6, 1);
        }
        else if(hex_sort(merge_array[merge_start + 1], merge_array[merge_start+7])){
            swap(7, 6);
        }
        else if(hex_sort(merge_array[merge_start + 2], merge_array[merge_start+7])){
            swap(7, 5);
        }
        else if(hex_sort(merge_array[merge_start + 3], merge_array[merge_start+7])){
            swap(7, 4);
        }
        else if(hex_sort(merge_array[merge_start + 4], merge_array[merge_start + 7])){
            swap(7, 3);
        }
        else if(hex_sort(merge_array[merge_start + 5], merge_array[merge_start + 7])){
            swap(7, 2);
        }
        else if(hex_sort(merge_array[merge_start + 6], merge_array[merge_start + 7])){
            swap(7, 1);
        }
        else if(hex_sort(merge_array[merge_start + 2], merge_array[merge_start+8])){
            swap(8,6);
        }
        else if(hex_sort(merge_array[merge_start + 3], merge_array[merge_start + 8])){
            swap(8,5);
        }
        else if(hex_sort(merge_array[merge_start + 4], merge_array[merge_start+8])){
            swap(8,4);
        }
        else if(hex_sort(merge_array[merge_start + 5], merge_array[merge_start + 8])){
            swap(8,3);
        }
        else if(hex_sort(merge_array[merge_start + 6], merge_array[merge_start + 8])){
            swap(8,2);
        }
        else if(hex_sort(merge_array[merge_start + 7], merge_array[merge_start + 8])){
            swap(8,1);
        }
        else if(hex_sort(merge_array[merge_start + 3], merge_array[merge_start+9])){
            swap(9,6);
        }
        else if(hex_sort(merge_array[merge_start + 4], merge_array[merge_start + 9])){
            swap(9,5);
        }
        else if(hex_sort(merge_array[merge_start + 5], merge_array[merge_start+9])){
            swap(9,4);
        }
        else if(hex_sort(merge_array[merge_start + 6], merge_array[merge_start + 9])){
            swap(9,3);
        }
        else if(hex_sort(merge_array[merge_start + 7], merge_array[merge_start + 9])){
            swap(9,2);
        }
        else if(hex_sort(merge_array[merge_start + 8], merge_array[merge_start + 9])){
            swap(9,1);
        }
        else if(hex_sort(merge_array[merge_start + 4], merge_array[merge_start + 10])){
            swap(10,6);
        }
        else if(hex_sort(merge_array[merge_start + 5], merge_array[merge_start + 10])){
            swap(10,5);
        }
        else if(hex_sort(merge_array[merge_start + 6], merge_array[merge_start + 10])){
            swap(10,4);
        }
        else if(hex_sort(merge_array[merge_start + 7], merge_array[merge_start + 10])){
            swap(10,3);
        }
        else if(hex_sort(merge_array[merge_start + 8], merge_array[merge_start + 10])){
            swap(10,2);
        }
        else if(hex_sort(merge_array[merge_start + 9], merge_array[merge_start + 10])){
            swap(10,1);
        }
        else if(hex_sort(merge_array[merge_start + 5], merge_array[merge_start + 11])){
            swap(11,6);
        }
        else if(hex_sort(merge_array[merge_start + 6], merge_array[merge_start + 11])){
            swap(11,5);
        }
        else if(hex_sort(merge_array[merge_start + 7], merge_array[merge_start + 11])){
            swap(11,4);
        }
        else if(hex_sort(merge_array[merge_start + 8], merge_array[merge_start + 11])){
            swap(11,3);    
        }
        else if(hex_sort(merge_array[merge_start + 9], merge_array[merge_start + 11])){
            swap(11,2);
        }
        else if(hex_sort(merge_array[merge_start + 10], merge_array[merge_start + 11])){
            swap(11,1);
        }
        else if(hex_sort(merge_array[merge_start + 6], merge_array[merge_start + 12])){
            swap(12,6);
        }
        else if(hex_sort(merge_array[merge_start + 7], merge_array[merge_start + 12])){
            swap(12,5);
        }
        else if(hex_sort(merge_array[merge_start + 8], merge_array[merge_start + 12])){
            swap(12,4);
        }
        else if(hex_sort(merge_array[merge_start + 9], merge_array[merge_start + 12])){
            swap(12,3);
        }
        else if(hex_sort(merge_array[merge_start + 10], merge_array[merge_start + 12])){
            swap(12,2);
        }
        else if(hex_sort(merge_array[merge_start + 11], merge_array[merge_start + 12])){
            swap(12,1);
        }
        else {
            winner = "merge";
        }
        return;
    }

}


