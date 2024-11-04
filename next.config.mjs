/** @type {import('next').NextConfig} */
import withExportImages  from 'next-export-optimize-images'
let nextConfig = {

};
console.log(process.env.MODE_BUILD)
if(process.env.MODE_BUILD === 'export'){
    nextConfig = withExportImages({

        images:{
            minimumCacheTTL:60,
            formats:["image/webp","image/avif"],
            //unoptimized:true,
            loader:"custom",
            loaderFile:'./customLoader.ts'
        } ,
        output:'export',
        //при установке assetPrefix для коректой работы next-export-optimize-images нужно также установить в export-images.config basePath
        assetPrefix:'/it-subbort-group/out'

    })
}


//output:'export',
//  assetPrefix:'/it-subbort-group/out'
export default nextConfig;
