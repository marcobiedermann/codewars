import type { Any } from '../../@types/types.ts';

type Type = 'electric' | 'fire' | 'grass' | 'water';

type EffectivenessTable = Record<Type, Any>;

const effectivenessTable: EffectivenessTable = {
  electric: {
    electric: 0.5,
    water: 2,
  },
  fire: {
    fire: 0.5,
    grass: 2,
    water: 0.5,
  },
  grass: {
    fire: 0.5,
    grass: 0.5,
    water: 2,
  },
  water: {
    electric: 0.5,
    fire: 2,
    grass: 0.5,
    water: 0.5,
  },
};

function calculateDamage(
  yourType: Type,
  opponentType: Type,
  attack: number,
  defense: number,
): number {
  const effectiveness = effectivenessTable[yourType][opponentType] || 1;

  return 50 * (attack / defense) * effectiveness;
}

export default calculateDamage;
