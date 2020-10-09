class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
    this.speak = (text) => {
      console.log(text.replace(/\w /g, ` ${this.sound} `) + ` ${this.sound}`);
    };
  }
}

const lion = new Animal("Lion", "Roar");
const tiger = new Animal("Tiger", "Grrr");
const dog = new Animal("Dog", "Guaaau");
lion.speak("I'm a lion");
tiger.speak("Lion sucks");
dog.speak("I'm the man best friend");
