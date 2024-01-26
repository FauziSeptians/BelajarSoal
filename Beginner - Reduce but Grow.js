function grow(x) {
  let Total = 1;
  x.map((e) => {
    Total *= e;
  });

  return Total;
}
