// Generated by CoffeeScript 1.7.1
(function() {
  var Sample, SampleScene;

  Sample = cc.Layer.extend({
    init: function() {
      var size;
      this._super();
      size = cc.Director.getInstance().getWinSize();
      this.helloLabel = cc.LabelTTF.create("Hello World", "Arial", 38);
      this.helloLabel.setPosition(cc.p(size.width / 2, size.height / 2));
      this.addChild(this.helloLabel, 5);
      this.setTouchEnabled(true);
      return true;
    },
    onTouchesBegan: function(touchies, event) {},
    onTouchesMoves: function(touchies, event) {},
    onTouchesEnded: function(touchies, event) {},
    onTouchesCancelled: function(touchies, event) {}
  });

  SampleScene = cc.Scene.extend({
    onEnter: function() {
      var layer;
      this._super();
      layer = new Sample();
      layer.init();
      return this.addChild(layer);
    }
  });

  this.SampleScene = SampleScene;

}).call(this);

//# sourceMappingURL=sample.map