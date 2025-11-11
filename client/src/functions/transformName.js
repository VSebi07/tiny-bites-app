const transformName = (n = '') => {
  return n.
  toLowerCase()
  .normalize('NFD')
  .replace('/[\u0300-\u036f]/g', '')
  .replace(/[^a-z0-9\s-]/g, "")
  .trim()                                   
  .replace(/\s+/g, "-");
}

export default transformName;