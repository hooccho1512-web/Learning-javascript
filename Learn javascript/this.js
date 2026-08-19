// this trong object = chính object đó
const person = {
  name: "Sora",
  age: 20,
  introduce: function() {
    console.log("Tôi là " + this.name);
    console.log("Tôi " + this.age + " tuổi");
  }
};

person.introduce();

// function
function car (name, color) {
  this.name = name;
  this.color = color;
};

const Mecerdes = new car (`Mecerdes`, `yellow`);
console.log(Mecerdes);

function Car (name, color) {
  this.name = name;
  this.color = color;
  this.run = function () {
    const name = this.name;
    setTimeout(function () {
      console.log(name, `running...`);
    }, 3000);
  };
};

const Lamborghini = new Car (`Lamborghini`, `Red`);
console.loh(Lamborghini.name)
console.log(Lamborghini.run)
