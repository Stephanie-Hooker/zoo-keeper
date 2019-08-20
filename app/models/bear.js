class Bear {
  constructor(data) {
    this.id = 1,
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

export default Bear;

