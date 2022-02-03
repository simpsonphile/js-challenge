import chroma from 'chroma-js';

export default class Color {
  private MAX_LVL = 5;

  constructor(private color: string) {}

  makeNumberInRange(num: number) {
    if (num < 0) return 0;
    if (num > this.MAX_LVL) return 5;
    return num;
  }

  get c() {
    return this.color;
  }

  tintShade(mode: 'darken' | 'brighten') {
    return (lvl = 1) => {
      const lvlComputed = this.makeNumberInRange(lvl);
      return chroma(this.color)
        [mode](lvlComputed * 0.1)
        .hex();
    };
  }

  shade(lvl = 1) {
    return this.tintShade('darken')(lvl);
  }

  tint(lvl = 1) {
    return this.tintShade('brighten')(lvl);
  }

  alpha(num = 1) {
    return chroma(this.color).alpha(num).hex();
  }
}
