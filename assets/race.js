var merge_array = [];
var arr_length = 12;                //length of array
var winner = null;                  //holds winner name when it is declared
var merge_start = 0;                //position within array to start sort at
var merge_sub_array_length = 1;     //position within sorting algorithm
var merge_x = 0;
var merge_y = 0;
var merge_pos = 0;

//insertion Sort Global Variaables
var insert_array = [];
var length = 12;
var ins_i = 1;
var ins_j = 0;
var tmp;
var FORWARD = 0;
var BACK = 1;
var direction = FORWARD;

//quicksort globals and helper functions=================================================================================
var quick_array = [];
var qsState = [true,true,true,true,true,true,true,true,true,true,true,true];
var qsLow = 0;
var qsHigh = 11;
var qsPivot;
var qsIP = (qsLow -1);
var qsIndex = 0;
var qsBoolLow = false;
var qsFirstTime = true;
function FindLow()
{
    for (var i = 0; i < arr_length; ++i)
    {
        if ((qsBoolLow == false) && (qsState[i] == true))
		{
			qsLow = i;
			qsBoolLow = true;
			return;
        }
    }
}
function FindHigh()
{
	for (var i = 0; i < arr_length; ++i)
	{
		if ((qsBoolLow == true) && (qsState[i] == false) && (i>=qsLow))
		{
			qsHigh = i - 1;
			if (qsHigh == -1)
				qsHigh = 0;
			qsBoolLow = false;
			return;
		}
	}
	qsHigh = arr_length-1;
	qsBoolLow = false;
	return;
}
function Finished()
{
    for (var i = 0; i < arr_length; ++i)
    {
        if (qsState[i]==true)
        {
            return false;
        }
    }
    return true;
}
//=====================================================================================================================

var all_arrays = [
	["0","B","A","3","2","8","4","7","6","5","1","9"], ["0","A","9","8","1","A","3","9","2","0","1","1"],
	["1","6","3","8","9","4","0","A","5","2","B","7"], ["1","9","8","4","1","B","3","8","2","6","2","5"],
    ["2","9","7","B","4","0","1","6","3","8","A","5"], ["2","6","1","0","9","4","8","7","8","6","2","6"],
    ["3","4","5","7","1","9","2","0","6","8","B","A"], ["3","5","6","A","A","0","2","3","B","7","2","4"],
    ["4","0","6","0","7","9","A","2","1","8","3","5"], ["4","B","B","0","6","5","6","6","7","1","0","A"],
    ["5","2","8","1","A","B","3","4","7","9","0","6"], ["5","7","5","0","6","8","4","B","8","9","3","4"],
	["6","9","8","7","2","B","3","A","5","4","1","0"], ["6","A","2","3","0","5","3","0","4","7","8","1"],
	["7","0","1","A","6","9","3","5","4","2","B","8"], ["7","8","5","2","8","6","1","0","3","4","2","9"],
	["8","7","3","A","9","4","2","5","B","1","6","0"], ["8","A","1","5","9","3","4","7","9","0","8","5"],
	["9","0","B","3","4","2","7","5","6","1","8","A"], ["9","9","B","5","3","5","1","A","3","3","A","B"],
	["A","4","0","B","5","8","6","1","7","9","2","3"], ["A","3","9","5","9","A","2","2","A","4","4","4"],
	["B","8","A","4","6","3","7","9","0","1","5","2"], ["B","6","0","0","5","A","6","2","7","B","2","3"]
];


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
    if (ins_j == 0)
	{
		direction = FORWARD;
	}
	if (ins_i < length)
	{
		if (direction == FORWARD)
		{
			if (insert_array[ins_i] < insert_array[ins_i - 1])
			{
				tmp = insert_array[ins_i];
				insert_array[ins_i] = insert_array[ins_i - 1];
				insert_array[ins_i - 1] = tmp;
				direction = BACK;
				ins_j = ins_i - 1;
			}
			else
			{
				ins_i++;
			}
		}
		else // Direction is BACK
		{
			if (insert_array[ins_j] < insert_array[ins_j - 1])
			{
				tmp = insert_array[ins_j];
				insert_array[ins_j] = insert_array[ins_j - 1];
				insert_array[ins_j - 1] = tmp;
				ins_j--;
			}
			else
			{
				direction = FORWARD;
			}
		}
	}
	else
	{
		winner = "insertionSort";
	}
}

//===================================================================================================
function stepQuicksort(){
    if(qsFirstTime)
    {
        qsPivot = quick_array[qsHigh];
        qsFirstTime=false;
    }
    if (qsIndex <= qsHigh)
    {
        if (quick_array[qsIndex] <= qsPivot)
        {
            qsIP++;
            var temp = quick_array[qsIndex];
            quick_array[qsIndex]=quick_array[qsIP];
            quick_array[qsIP]=temp;
        }
        qsIndex++;
    }
    else
    {
        qsState[qsIP] = 0;
        FindLow();
        FindHigh();
        if (qsLow == qsHigh)
        {	
            qsState[qsIP-1] = 0;
            FindLow();
            FindHigh();
        }
        qsIndex = qsLow;
        qsIP = qsLow - 1;
        qsPivot = quick_array[qsHigh];
    }
    if(Finished())
    {
        winner = "quick";
    }
    return;
 }
//=============================================================================================================================
//uses sub_array length to decide sorting intensity, sorts first by 3 then 6 to sort all 12 items.


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
        /*
        // Test a function to remove if - else if - else
        var notDone = true;
        
        while(notDone){
            console.log('start');
            if(hex_sort(merge_array[merge_start+merge_pos], merge_array[merge_start+merge_x])){
                swap(merge_x,merge_y);
                merge_pos += 1;
                notDone = false;
                console.log('problem 1')
            }
            merge_y -= 1;
            if(merge_y = 0){
                merge_y = merge_sub_array_length;
                merge_x +=1;
                merge_pos -=1;
            }
            if(merge_x == merge_sub_array_length * 2){
                merge_start += 6
            }
            if(merge_start == arr_length){
                merge_sub_array_length = 6;
                merge_start = 0;
                notDone = false;
            }
            console.log('problem main');
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

/*
function race_manager()
{
	//Pick a random array out of the 24 possibilities
	random_array_index = Math.floor((Math.random() * 24));
	
	//Initialize all 3 arrays to the random array
	merge_array = new Array(all_arrays[random_array_index]);
	quick_array = new Array(all_arrays[random_array_index]);
	insert_array = new Array(all_arrays[random_array_index]);
	
	while(winner == null)
	{
		stepInsertionSort();
		stepMergeSort();
		stepQuicksort();
		//Redraw each array
	}
}
*/