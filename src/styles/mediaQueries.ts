export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const mq = {
  getStr(size: number) {
    return `@media (min-width: ${size}px)`;
  },
  get xs() {
    return this.getStr(breakpoints.xs);
  },
  get sm() {
    return this.getStr(breakpoints.sm);
  },
  get md() {
    return this.getStr(breakpoints.md);
  },
  get lg() {
    return this.getStr(breakpoints.lg);
  },
  get xl() {
    return this.getStr(breakpoints.xl);
  },
};
