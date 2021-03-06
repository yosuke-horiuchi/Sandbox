// Generated by CoffeeScript 1.7.1
(function() {
  var Result;

  this.g = {
    score: 0
  };

  Result = cc.Layer.extend({
    init: function() {
      var highLabel, highScore, resultLabel, size;
      this._super();
      size = cc.Director.getInstance().getWinSize();
      resultLabel = cc.LabelTTF.create("score: " + g.score, "Arial", 20);
      resultLabel.setPosition(cc.p(size.width / 2, size.height / 2));
      this.addChild(resultLabel);
      highScore = parseInt(sys.localStorage.getItem("Sample/highScore") || 0);
      console.log(g.score);
      console.log(highScore);
      if (g.score > highScore) {
        console.log("high score");
        sys.localStorage.setItem("Sample/highScore", highScore);
      }
      highLabel = cc.LabelTTF.create("high score: " + highScore, "Arial", 20);
      highLabel.setPosition(cc.p(size.width / 2, size.height / 2 - 50));
      this.addChild(highLabel);
      this.scheduleOnce(function() {
        return this.onTouchesBegan = function(touches, event) {
          g.score = 0;
          cc.Director.getInstance().replaceScene(new SampleScene);
        };
      }, 2.0);
      this.setTouchEnabled(true);
      return true;
    },
    onTouchesBegan: function(touches, event) {},
    onTouchesMoved: function(touches, event) {},
    onTouchesEnded: function(touches, event) {},
    onTouchesCancelled: function(touches, event) {}
  });

  this.ResultScene = cc.Scene.extend({
    onEnter: function() {
      var layer;
      console.log("resultScene");
      this._super();
      layer = new Result();
      layer.init();
      return this.addChild(layer);
    }
  });

}).call(this);

//# sourceMappingURL=result.map
