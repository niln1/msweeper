// function to create a X by Y grid
// X is a number of columns Y is number of rows

function grid(x, y) {
  //  create box 
  function createBox() {
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    return box;
  }

  // create a row
  function createRow() {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let i = 0; i < 2; i++) {
      row.appendChild(createBox())
    }
    return row
  }
  // box.setAttribute('a','b')
  // box.setAttribute('disable','true')
  // <div class="box" a="b" disable="true"></div>
  function createGrid() {

    const grid = document.createElement('div');
    for (let i = 0; i < 2; i++) {
      const row = createRow()
      grid.appendChild(row)
    }
    return grid
  }

  // Add box to body
  const grid = createGrid(x, y);
  const game = document.getElementById('game');
  game.appendChild(grid);





  // const row = document.createElement('div');
  // // row.appendChild(x);
  // // row.appendChild(y);

  // const body = document.querySelector('body');
  // body.appendChild(row);

  // for (let i = 0; i < 9; i++) {
  //   for (let j = 0; j < 9; j++) {
  //     x = document.createElement('div');
  //     y = document.createElement('div');
  //     x.setAttribute('class', 'box');
  //     y.setAttribute('class', 'box');
  //     row.appendChild(x[i])
  //     row.appendChild(y[j])
  //   }
  // }


}

grid(18, 18)