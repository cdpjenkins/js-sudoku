var b = _.range(1,10)
var default_board = [
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)],
    [_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b),_.clone(b)]
];


var value_at = function(board, x, y) {
    return board[y][x];
}

var is_solved_square = function(board, x, y) {
    if (value_at(board, x, y).length == 1) {
	return true;
    } else {
	return false;
    }
}


var get_value = function(board, x, y) {
    var result;
    if (is_solved_square(board, x, y)) {
	result = value_at(board, x, y)[0];
    } else {
	result = 0;
    }

    return result;
}

var row_coords = function(x, y) {
    var result = [];
    for (x1 = 0; x1 < 9; x1++) {
	if (x1 != x) {
	    result.push([x1, y]);
	}
    }

    return result;
}

var col_coords = function(x, y) {
 var result = [];
    for (y1 = 0; y1 < 9; y1++) {
	if (y1 != y) {
	    result.push([x, y1]);
	}
    }

    return result;
}

var square_coords = function(x, y) {
    var xmod = Math.floor(x / 3);
    var ymod = Math.floor(y / 3);

    var result = [];

    for (y1 = 0; y1 < 9; y1++) {
	for (x1 = 0; x1 < 9; x1++) {
	    if (Math.floor(y1 / 3) == ymod && Math.floor(x1 / 3) == xmod) {
		if (x1 != x && y1 != y) {
		    result.push([x1, y1]);
		}
	    }
	}
    }

    return result;
}

var get_board_representation = function(board) {
    var result = [];

    for (y = 0; y < 9; y++) {
	var result_row = [];

	for (x = 0; x < 9; x++) {
	    var value = get_value(board, x, y);

	    result_row.push(value);
	}

	result.push(result_row);
    }

    return result;
}

var set_value = function(board, x, y, number) {
    console.log("set_value " + x + ", " + y + ", num==" + number);
    
    // first of all, set it
    board[y][x] = [number];

    // then recursively eliminate that number from other squares
    // er... TODO
    var neighbours = row_coords(x, y).concat(col_coords(x, y) .concat(square_coords(x, y)));
    for (i = 0; i < neighbours.length; i++) {
	var coord = neighbours[i];
	x1 = coord[0];
	y1 = coord[1];
	eliminate_possibility(board, x1, y1, number);
    }

    console.log("waaaaa");
    console.log(board);

    return board;
}

var eliminate_possibility = function(board, x, y, number) {
    console.log("eliminate_poss " + x + ", " + y + ", num==" + number);

    if (board[y][x].length > 1) {
	var old = board[y][x];

	var ne = _.without(old, number);
	board[y][x] = ne

	if (ne.length == 1) {
	    set_value(board, x, y, ne[0]);
	}
    }

    return board;
}

var log_board = function(board) {
    for (y = 0; y < 9; y++) {
	row = board[y]
	result_row = ""

	for (x = 0; x < 9; x++) {
	    var value = get_value(board, x, y);

	    if (value == 0) {
		result_row += "."
	    } else {
		result_row += value
	    }
	}
	console.log(result_row)

    }
}






//console.log(default_board);


b = default_board;
b = set_value(b, 2, 0, 4);

b = set_value(b, 3, 0, 7);

b = set_value(b, 4, 0, 2);
b = set_value(b, 6, 0, 9);
b = set_value(b, 1, 1, 3);
b = set_value(b, 2, 1, 9);
b = set_value(b, 5, 1, 8);
b = set_value(b, 8, 1, 5);
b = set_value(b, 2, 2, 1);
b = set_value(b, 3, 2, 5);
b = set_value(b, 5, 2, 6);
b = set_value(b, 8, 2, 4);
b = set_value(b, 1, 3, 4);
b = set_value(b, 4, 3, 1);
b = set_value(b, 6, 3, 5);
b = set_value(b, 7, 3, 2);
b = set_value(b, 1, 4, 2);
b = set_value(b, 2, 4, 8);
b = set_value(b, 4, 4, 5);
b = set_value(b, 6, 4, 1);
b = set_value(b, 7, 4, 7);
b = set_value(b, 1, 5, 1);
b = set_value(b, 2, 5, 6);
b = set_value(b, 4, 5, 3);
b = set_value(b, 7, 5, 9);
b = set_value(b, 0, 6, 4);
b = set_value(b, 3, 6, 9);
b = set_value(b, 5, 6, 1);
b = set_value(b, 6, 6, 3);
b = set_value(b, 0, 7, 1);
b = set_value(b, 3, 7, 3);
b = set_value(b, 6, 7, 8);
b = set_value(b, 7, 7, 4);
b = set_value(b, 2, 8, 7);
b = set_value(b, 4, 8, 8);
b = set_value(b, 5, 8, 5);
b = set_value(b, 6, 8, 6);
/*
*/

log_board(b);
