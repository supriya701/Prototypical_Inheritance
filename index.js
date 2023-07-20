//Prototypical Inheritence
function phone() {
  (this.modelNumber = ''),
    (this.getModelNumber = function () {
      return console.log(`Phone model number is ${this.modelNumber}`);
    });
}

function samsung() {
  (this.modelNumber = 'xxxx-yyyy'),
    (this.latestFeature = function () {
      return console.log(`New Samsung model number has a foldable feature`);
    });
}
samsung.prototype = new phone(); ///protypical Inheritance
let obj = new samsung();
console.log(obj.getModelNumber());
console.log(obj.latestFeature());
