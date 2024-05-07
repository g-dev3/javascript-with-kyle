const a = ["a", "b", "c"];

for (let i = 1; i < a.length; i++) {
  console.log(a[i]);
}

for (let i = 0; i < 5; i++) {
  console.log("Start" + i);
  if (i > 2) break;
  console.log("end" + i);
}

for (let i = 0; i < 5; i++) {
  console.log("Start" + i);
  if (i > 2) continue;
  console.log("end" + i);
}
