export const mq = {
  getStr(size: number) {
    return `@media (min-width: ${size}px)`;
  },
  get sm() {
    return this.getStr(576);
  },
  get md() {
    return this.getStr(768);
  },
  get lg() {
    return this.getStr(992);
  },
  get xl() {
    return this.getStr(1200);
  },
};
