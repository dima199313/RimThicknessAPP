export const calcTO = function (firstDiameter, secondDiameter, rimThickness,) {
  const diameterDifference = +firstDiameter - +secondDiameter;
  const allowance = diameterDifference / 2;
  const originalRimThickness = evenOrOdd2(Math.ceil(allowance + +rimThickness));
  function evenOrOdd(number) {
    if (number % 2 === 0) {
      return number;
    } else {
      return number - 1;
    }
  }
  function evenOrOdd2(number) {
    if (number % 2 === 0) {
      return number;
    } else {
      return number + 1;
    }
  }
  rimThickness = evenOrOdd(rimThickness);



  return {
    firstDiameter,
    secondDiameter,
    rimThickness,
    originalRimThickness,
    rimThickness,
    allowance
  }
  // console.log('РАЗМЕРЫ КОЛЕСНОЙ ПАРЫ:');
  // console.log(`Первоначальный диаметр КП: ${firstDiameter} мм.`);
  // console.log(
  //   `Первоначальная толщина обода КП:          ${originalRimThickness} мм.`
  // );
  // console.log(`Диаметр КП после обточки: ${secondDiameter} мм.`);
  // console.log(
  //   `Толщина обода КП после обточки:              ${rimThickness} мм.`
  // );
  // console.log(`Толщина обода которая была снята:          ${allowance} мм.`);
  // console.log('v2.0.3(beta)');
};
