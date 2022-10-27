type Material = 'paper' | 'glass' | 'organic' | 'plastic';

interface Item {
  type: string;
  material: Material;
  secondMaterial?: Material;
}

function recycle(array: Item[]) {
  const bins = new Map<Material, string[]>([
    ['paper', []],
    ['glass', []],
    ['organic', []],
    ['plastic', []],
  ]);

  array.forEach((item) => {
    bins.set(item.material, [...(bins.get(item.material) || []), item.type]);

    if (item.secondMaterial) {
      bins.set(item.secondMaterial, [...(bins.get(item.secondMaterial) || []), item.type]);
    }
  });

  return [...bins.values()];
}

export default recycle;
