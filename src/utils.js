const getSpeed = (w, s, d) => (0.5 + w) * s * (d ? -1 : 1);

export const createStar = (w, h, s, d) => {
  const weight = 1 + Math.random();
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    s: getSpeed(weight, s, d),
    w: weight,
  };
}

export const createStars = (n, w, h, s, d) => {
  const stars = [];
  for (let i = 0; i < n; i += 1) {
    stars.push(createStar(w, h, s, d));
  }
  return stars;
}

export const updateStar = (star, h) => {
  star.y -= star.s;
  if (star.y < 0) star.y = h;
  else if (star.y > h) star.y = 0;
}

export const updateStars = (stars, w, h, s, d) => {
  for (let i = 0; i < stars.length; i += 1) {
    stars[i].x = Math.random() * w;
    stars[i].y = Math.random() * h;
    stars[i].s = getSpeed(stars[i].w, s, d);
  }
}

