
//Define the class SettingsParser to parse the input JSON string into an object
function SettingsParser(jsonString, settingsJson){
  this.settingsJsonString = jsonString;
  this.settings = settingsJson;
}

//prototype for SettingsParser which defines methods like parse and print
SettingsParser.prototype = {
  parseJsonString: function(){
      alert(this.settingsJsonString)
      this.settings = JSON.parse(this.settingsJsonString);
  },
  printJson: function(){
      alert(this.settings.SETTINGS_RELEASE);
  }
}

//Reads a single file
function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

//Displays the contents of the file- essentially calls the settings parser and prints the parsed object
function displayContents(contents) {
  var settings = new SettingsParser(contents, null);
  settings.parseJsonString();
  settings.printJson();
}

//Reads the file-input HTML element and calls the parser once a file is uploaded.
document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);
