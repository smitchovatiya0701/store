export const formatButtonName = (name: string): string => {
  // Remove whitespace and special characters, then concatenate
  return name.replace(/[\s+\/]/g, "").trim();
};
