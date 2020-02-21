function bonusTime(salary: number, bonus: boolean): string {
  return bonus ? `£${salary * 10}` : `£${salary}`;
}

export default bonusTime;
