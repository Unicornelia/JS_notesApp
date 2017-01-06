(function testNoteListViewExist() {
  var noteListView = new NoteListView(NoteList());
  assert.isTrue(noteListView)
})();

(function testPrintingEmptyHtmlString() {
  var notelist = new NoteList;
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.returnHTML() === '<ul></ul>');
})();

(function testPrintingOneNote20Char() {
  var notelist = new NoteList();
  notelist.createNote("My favourite color is: black");
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.returnHTML() === "<ul><li><a href=#notes/0><div id=0>My favourite color i</div></a></li></ul>");
})();

(function testPrintingOneHtmlString() {
  var notelist = new NoteList;
  var notelistview = new NoteListView(notelist);
  notelistview.notes.createNote("My favourite color is: black");
  assert.isTrue(notelistview.returnHTML() === "<ul><li><a href=#notes/0><div id=0>My favourite color i</div></a></li></ul>");
})();

(function testPrintingTwoHtmlString() {
  var notelist = new NoteList;
  var notelistview = new NoteListView(notelist);
  notelistview.notes.createNote("My favourite color is: black");
  notelistview.notes.createNote("My favourite color is: red");
  assert.isTrue(notelistview.returnHTML() === "<ul><li><a href=#notes/0><div id=0>My favourite color i</div></a></li><li><a href=#notes/1><div id=1>My favourite color i</div></a></li></ul>");
})();
