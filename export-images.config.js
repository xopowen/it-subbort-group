

const config = {
    sourceImageParser: ({ src, defaultParser }) => {

        if(src.includes('\\')){
            let list = src.split('\\')
            let name = list.pop()

            return {
                pathWithoutName: '' , // maybe there is no path, or you can supply an arbitrary one for filename processing
                name:  name ,
                extension: name.split('.').at(-1) ,
            }

        }


        const regExpMatches = src.split('/')

        let name = regExpMatches.pop()

        let extension = name.split('.').at(-1)
        // if (false) {
        //     console.log('defaultParser')
        //     console.log(defaultParser(src))
        //     return defaultParser(src)
        // }

        // if the src has fileId and extension in its route then it
        // must be a non-standard image, so parse it differently for all intents
        // and purposes

        return {
            pathWithoutName: '' , // maybe there is no path, or you can supply an arbitrary one for filename processing
            name: name ,
            extension: extension,
        }
    },
    basePath:'/it-subbort-group/out'
}

module.exports = config