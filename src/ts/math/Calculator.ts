class Calculrator {
  private a:number = 0;
  private b:number = 0;

  constructor() {
  }

  public setAdd(param1:number, param2:number): void {
    this.a = param1;
    this.b = param2;
  }
  public getAdd(): number {
    return this.a + this.b;
  }

  public setMinus(param1: number, param2: number) {
    if(param1<param2) {
      throw 'first parameter is larger than second parameter';
    } else {
      this.a = param1;
      this.b = param2;
    }
  }
  public getMinus(): number {
    return this.a-this.b;
  }

  public setMulti(param1: number, param2: number) {
    this.a = param1;
    this.b = param2;
  }
  public getMulti(): number {
    return this.a*this.b;
  }

  public setDiv(param1: number, param2: number) {
    this.a = param1;
    this.b = param2;
  }
  public getDiv(): number {
    return this.a / this.b;
  }
};

export {Calculrator};