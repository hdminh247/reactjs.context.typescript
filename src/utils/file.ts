export const isImage = (fileName: string) => {
  // Regex to check valid
  // Image File
  const regex = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|gif|webp|JPG|JPEG|PNG|GIF)$/);

  // if str
  // is empty return false
  if (fileName == null) {
    return false;
  }

  // Return true if the str
  // matched the ReGex
  return regex.test(fileName);
};
