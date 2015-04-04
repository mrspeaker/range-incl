
function range (start, end = 0, step = 1) {

  if (!end) {
    [start, end] = [end, start - 1]
  }

  return Array.from((function* (start, end) {

    let i = start;
    while (i <= end) {

      const v = i;
      i += step;
      yield v;

    }

  })(start, end));

}

export default range;
