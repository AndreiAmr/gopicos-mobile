export const emailRegex =
  /^([A-Za-z0-9_\-.])+@(?![A-Za-z0-9_\-.]+\.com\.com)([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

export const validateEmail = (
  email: string,
  changeError: (err?: string) => void
) => {
  if (emailRegex.test(email)) {
    changeError(undefined);
  }
};
