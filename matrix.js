let Matrix = {
	//validators for the matrix object.
	isMatrix: function(matrix){
		for (row of matrix){
			if (row.length === matrix[0])
				continue
		}else {
			return false
		}return true
	}

	canMultiply: function(matrix1, matrix2){

	}
	//math methods.
	add: function(matrix1, matrix2){
		for (i = 0; i < matrix1.length; i++){
			for (j = 0; j < matrix1[0].length; j++){
				matrix1[i][j] += matrix2[i][j]
			}
		}return matrix1
	},

	subtract: function(matrix1, matrix2){
		for (i = 0; i < matrix1.length; i++){
			for (j = 0; j < matrix1[0].length; j++){
				matrix1[i][j] -= matrix2[i][j]
			}
		}return matrix1
	},

	multiply: function(matrix1, matrix2){
		function dotPoint(tup1, tup2){
			let sum = 0;
			for (let i = 0; i < tup1.length; i++){
				sum += (tup1[i] * tup2[i])
			}return sum
		}
		if (typeof matrix1 == 'number'){
			//Scalar multiplication
			for (i = 0; i < matrix2.length; i++){
				for (j = 0; j < matrix2[0].length; j++){
					matrix2[i][j] *= matrix1
				}
			}return matrix2
		}else {
			//Matrix mulitplication
			let cols = [];
			for (let i = 0; i < matrix2[0].length; i++){
				cols.push([])
				for (row of matrix2){
					cols[i].push(row[i])
				}
			}
			//Use dotPoint to multiply the columns and rows.
			let newMatrix = [];
			for (row of matrix1){
				for (col of cols){
					newMatrix.push(dotPoint(row, col))
				}
			}return newMatrix
		}
	},

	divide: function(matrix1, matrix2){
		return undefined
	},

}