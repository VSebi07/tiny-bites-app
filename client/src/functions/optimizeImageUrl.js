function optimizeUrl(url) {
  return url.replace('/upload/', '/upload/w_1000/q_auto/f_auto/');
}

export default optimizeUrl;