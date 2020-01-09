
const rotate = function (planetId, index) {
  const majorRadius = ['200', '400', '500', '600', '700', '800', '850', '900'];
  const minorRadius = ['50', '75', '100', '130', '170', '210', '250', '290'];
  let angle = 0;
  const planet = document.getElementById(planetId);
  setInterval(() => {
    const deviation = angle / (2 ** index + 1);
    const cx = 600;
    const cy = 250;
    const x = cx + majorRadius[index] * Math.cos(deviation) + 'px';
    const y = cy + minorRadius[index] * Math.sin(deviation) + 'px';
    planet.setAttribute('cx', x);
    planet.setAttribute('cy', y);
    angle = angle + 0.02;
  }, 1000 / 35);
};

const main = function () {
  const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
  planets.forEach((planet, index) => rotate(planet, index));
};

main();
