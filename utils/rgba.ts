import colors from '@theme/colors'

export default (colour: string, alpha: number = 1) => {

    let hex: any = colors

    const objectArray = colour.split('.')
    objectArray.forEach((val: string) => {
        hex = hex[val]
    })

    const [r, g, b] = hex.match(/\w\w/g).map((x: string) => parseInt(x, 16))
    return `rgba(${r},${g},${b},${alpha})`
}