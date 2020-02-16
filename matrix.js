let Matrix = {
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
			for (let i = 0; i < matrix1[0].length; i++){
				cols.push([])
				for (row of matrix1){
					cols[i].push(row[i])
				}
			}return cols
		}
		
	},

	divide: function(matrix1, matrix2){
		return NaN
	},

}



let mat1 = [[5, 2, 9],
			[0, 1, 3],]

let mat2 = [[2, 3, 6], 
			[4, 1, 7],]


debug(Matrix.multiply(mat1, mat2))
debug(Matrix.add(mat1, mat2))














































