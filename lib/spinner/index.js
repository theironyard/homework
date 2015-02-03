/*
  A small wrapper around node-spinner.
  Please pass in an inquirer referefence when `require`'d
*/

var nodeSpinner = require('node-spinner'),
    spinnerAnimation,
    ui;
    
function spinner(inquirer){

  return {
    start: function (message) {
      var loop = nodeSpinner();
      ui = new inquirer.ui.BottomBar();
      spinnerAnimation = setInterval(function(){
        ui.updateBottomBar(message + loop.next() + '\n');
      }.bind(this), 50);
    },

    stop: function () {
      clearInterval(spinnerAnimation);
      ui.updateBottomBar('' + '\n');
    }
  }
}



module.exports = spinner;