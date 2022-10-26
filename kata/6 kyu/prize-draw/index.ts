function rank(st: string, we: number[], n: number): string {
  const participants = st.split(',');

  if (!st) {
    return 'No participants';
  }

  if (n > participants.length) {
    return 'Not enough participants';
  }

  const ranks = participants
    .map((participant, index) => {
      const sum = participant
        .toLowerCase()
        .split('')
        .reduce((accumulator, currentValue) => accumulator + (currentValue.charCodeAt(0) - 96), 0);

      const score = (participant.length + sum) * we[index];

      return {
        participant,
        score,
      };
    })
    .sort((a, b) => a.participant.localeCompare(b.participant))
    .sort((a, b) => b.score - a.score);

  return ranks[n - 1].participant;
}

export default rank;
