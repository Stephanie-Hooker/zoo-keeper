class Camel {
  constructor(data) {
    this.id = 2,
      this.name = data.name;
    this.color = data.color;
    this.gender = data.gender;
    this.weight = data.weight;
    this.tailLengthInch = data.tailLengthInch;
    this.teethSize = data.teethSize;

  }
  eat(food) {
    console.log(`Nom, Nom`)
  }
}

export default Camel;