function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string,
): boolean {
  return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}

export default checkCoupon;
