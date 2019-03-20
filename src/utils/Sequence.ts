export default class Sequence {
  items: number[] = [];

  constructor(from: number, to: number) {
    for (let i = from; i <= to; i += 1) {
      this.items.push(i);
    }
  }
}
