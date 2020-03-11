type Light = 'green' | 'red' | 'yellow';

type Lights = Record<Light, Light>;

const lights: Lights = {
  green: 'yellow',
  yellow: 'red',
  red: 'green',
};

function updateLight(current: Light): Light {
  return lights[current];
}

export default updateLight;
