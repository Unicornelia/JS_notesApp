(function testNoteModelExist() {
  var note = new Note("Text");
  assert.isTrue(note);
})();

(function testAddingNewNote() {
  var note = new Note("Text");
  assert.isTrue(note.text === "Text");
})();
