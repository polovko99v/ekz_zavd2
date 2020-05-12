import Photo from './model';

export default {
    async run(req,res){
        try{
            await Photo.deleteMany({});
            const photos = [
                {
                    title:"Big Ben",
                    comment:"Really cool picture",
                    author:"Polovko",
                    tagList:"#photo#landscape#bigben",
                    photoDate:new Date("10-10-2019"),
                    likeCount:50
                },
                {
                    title:"Eiffel tower",
                    comment:"Wow, that is so amazing",
                    author:"Saroz",
                    tagList:"#photo#landscape#paris#tower",
                    photoDate:new Date("12-02-2019"),
                    likeCount:100
                },
                {
                    title:"Pyramid",
                    comment:"This pyramid is so huge",
                    author:"Prodan",
                    tagList:"#photo#landscape#pyramid#egypt",
                    photoDate:new Date("05-12-2019"),
                    likeCount:80
                }
            ];
            photos.forEach(async photo=>await new Photo(photo).save());
        } catch(error){
            console.log(error)
        }
    }
}

