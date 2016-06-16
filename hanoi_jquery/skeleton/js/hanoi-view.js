function HanoiView(game,el) {
  this.game = game;
  this.el = el;
  this.setupTowers();
  this.clickTower();
}

HanoiView.prototype.setupTowers = function () {
  const rootEl = this.el;
  for(let i=0; i < 3; i++) {
    $(rootEl).append(`<ul class=${i}>`);
  };

  $("ul").each( (index, ele) => {
    $(ele).append("<li><li><li>");
  });

  let firstTower = $('ul')[0];
  let disks = $(firstTower).children();
  disks.each((index,disk) => {
    let className = `disk${index}`;
    $(disk).addClass(className);
  })
};

HanoiView.prototype.clickTower = function() {
  let tower_array = [];
  let that = this;
  $('ul').on('click', ev => {
    let $target1 = $(ev.currentTarget);
    console.log($target1);
    tower = parseInt($target1.attr('class'));
    tower_array.push(tower);
    if (tower_array.length === 2) {
      console.log(tower_array);
      that.makeMove(tower_array[0], tower_array[1]);
      tower_array = [];
    }
  });
}

HanoiView.prototype.makeMove = function (start, end) {
  let bool = this.game.move(start, end);
  if (bool) {
    this.render();
  } else {
    alert("Invalid move!");
  }
  if (this.game.isWon()) {
    alert("Congrats!");
  }
};

HanoiView.prototype.render = function () {
  const towers = this.game.towers;
  let $li;
  for(let i = 0; i < 3; i++){
    for(let j = 2; j >= 0; j--){
      let num = towers[i][j]
      let $ul = $('ul').eq(i);
      let li = $ul.children();
      if (j === 2) {
        $li = $(li[0]);
      } else if (j === 1) {
        $li = $(li[1]);
      } else {
        $li = $(li[2]);
      }
      if (num === undefined) {
        $li.removeClass();
      }else {
        $li.attr('class', `disk${num-1}`)
      }
    }
  }
};

module.exports = HanoiView;
