export default function myImgLoader({
                                             src,
                                             width,
                                             quality,
                                         }: {
    src: string
    width: number
    quality?: number
}) {
    console.log(src)
    // console.log(width)
    // console.log(quality)
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    return  src
}