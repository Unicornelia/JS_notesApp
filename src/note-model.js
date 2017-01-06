(function(exports) {
  var counter = 0;

  var Note = function(text) {
    this.text = text;
    this.id = counter++;
  };
  Note.prototype.returnText = function() {
    return this.text;
  };
  exports.Note = Note;
})(this);
