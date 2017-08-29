//作用域
// var globalValue = "globalValue";
// function localFunction() {
//     var localValue = "localValue";
//     console.log(globalValue);
//     console.log(localValue);
//     globalValue = "change globalValue";
//     console.log(globalValue);
//     console.log(localValue);
//     function scopeFunction() {
//         var innerScopeValue = "innerScopeValue";
//         console.log(innerScopeValue);
//         console.log(globalValue);
//         console.log(localValue);
//     }
//     scopeFunction();
// }
// localFunction();
//上下文
// var words = "...~~~";
// var pet = {
//     words: "...",
//     speak: function (say) {
//         console.log(this.words);
//         console.log(this);
//     }
// };
// var petSpeak = pet.speak;
// petSpeak();
// function pet(words) {
//     this.words = words;
//     console.log(this.words);
//     console.log(this);
// }
// pet("miao~");
// console.log(words);
// var pet = {
//     words: "...",
//     speak: function (say) {
//         console.log(say + " " + this.words);
//     }
// };
// var dog = {
//     words: "Wang~"
// };
// pet.speak.call(dog, "Dog");
// pet.speak.apply(dog, ["Dog"]);
// function Pet(words) {
//     this.words = words;
//     this.speak = function (say) {
//         console.log(say + " " + this.words);
//     }
// }
// function Dog(words) {
//     Pet.call(this, words);
// }
// var dog = new Dog("汪汪汪~");
// dog.speak("狗:");
// function Pet(words) {
//     this.words = words;
//     this.speak = function (say) {
//         console.log(say + " " + this.words);
//     }
// }
// var pet = new Pet("喵喵喵~~");
// pet.speak("猫:");
// function Dog(words) {
//     Pet.call(this, words);
// }
// var dog = new Dog("汪汪汪~~");
// dog.speak("狗:");

