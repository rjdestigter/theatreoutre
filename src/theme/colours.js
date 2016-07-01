export const RED = [255, 0, 51]

export const colourize = colour => (alpha = 1) =>
  `rgba(${colour.concat([alpha]).join(',')})`

export const red = (alpha = 1) => colourize(RED)(alpha)

export default {
  colourize,
  red,
}
