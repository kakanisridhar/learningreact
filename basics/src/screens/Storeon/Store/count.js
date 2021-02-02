const count = (store) => {
  store.on("@init", () => ({ count: 0 }));
  store.on("inc", ({ count }) => ({ count: count + 1 }));
};

export default count;
