const transpose = (matrix) => {
  return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
};

module.exports = transpose;