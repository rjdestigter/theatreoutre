export const RED = [255, 0, 51]

export const colourize = color => (alpha = 1) =>
  `rgba(${color.concat([alpha]).join(',')})`

export const red = (alpha = 1) => colourize(red)(alpha)

export default {
  colourize,
  red,
}
