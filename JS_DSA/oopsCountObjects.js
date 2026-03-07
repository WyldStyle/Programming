class count_objects{
  static i = 0;
  constructor(){
    count_objects.i++;
  }
}

var a = new count_objects();
var b = new count_objects();
var c = new count_objects();
console.log(count_objects.i);
var d = new count_objects();
console.log(count_objects.i);
var e = new count_objects();
console.log(count_objects.i);
