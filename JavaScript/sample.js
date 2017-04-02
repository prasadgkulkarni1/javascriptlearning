
//Define the class SettingsParser to parse the input JSON string into an object
/* This method is using function constructor to define a class of objects (SettingsParser), then using this class to
instantiate an object at runtime*/

function SettingsParser(jsonString, settingsJson){
  this.settingsJsonString = jsonString;
  this.settings = settingsJson;
}

//prototype for SettingsParser which defines methods like parse and print
SettingsParser.prototype = {
  parseJsonString: function(){
      console.log(this.settingsJsonString)
      this.settings = JSON.parse(this.settingsJsonString);
  },
  getSettings: function(){
    return this.settings;
  }
}

/**
This method is using object definition (with its properties and methods), and using this as template for new object creation
using this object's prototype


var SettingsParser = {
  settingsJsonString:null,
  settings:null,

  setSettingsJsonString:function(jsonString){
    this.settingsJsonString = jsonString;
  },

  getSettingsJsonString:function(){
    return this.settingsJsonString;
  },

  parseJsonString: function(){
      console.log(this.settingsJsonString)
      this.settings = JSON.parse(this.settingsJsonString);
  },

  printJson: function(){
      console.log(this.settings.SETTINGS_RELEASE);
  },

  getSettings: function(){
    return this.settings;
  }
} */

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
    printSettingsObject(displayContents(contents));
  };
  reader.readAsText(file);
}

//Displays the contents of the file- essentially calls the settings parser and prints the parsed object
function displayContents(contents) {
  /**
  This is using function constructor to instantiate settings object */
  var parser = new SettingsParser(contents, null);


  /** This is using existing object SettingsParser to create another object of its type */
  //var settings = Object.create(SettingsParser);
  //settings.setSettingsJsonString(contents);
  parser.parseJsonString();

  console.log("The prototype of settings object is SettingsParser.prototype:" + (Object.getPrototypeOf(parser) === SettingsParser.prototype))
  console.log("The prototype of SettingsParser object is Function's prototype:" + (Object.getPrototypeOf(SettingsParser) === Function.prototype))

  return parser;
}

function printSettingsObject(parser){
  var settings = parser.getSettings();
  console.log("Settings version is: " + settings.SETTINGS_RELEASE);
  console.log("Settings Date is: " + settings.SETTINGS_DATE);
  printFormRenderSettings(settings);
}

function printFormRenderSettings(settings){
  console.log("Inside printFormRenderSettings");
  console.log(settings);
}


//Reads the file-input HTML element and calls the parser once a file is uploaded.
document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);
