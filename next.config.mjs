/** @type {import('next').NextConfig} */
import withExportImages  from 'next-export-optimize-images'
let nextConfig = {

};
if(process.env.NODE_ENV === 'production'){
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
