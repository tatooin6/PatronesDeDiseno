const y = 'lele';
const f = () => {
  const x = 'lala';
  return () => {
    const z = 'lolo';
    console.log(x, y, z);
  }
}
/*const g = () => {
  const a = 'lala'
  console.log(a, y);
  console.log(a, x);
}*/
f();
//g();

