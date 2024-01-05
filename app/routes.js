const apiDeezer = require("../src/services/deezer.js");
const apiTopMusic = require("../src/services/topMusic.js");
module.exports = (app) => {
    app.get('/', (req,res) => {
        const api = new.apiDeezer();
        const topMusic = new.apiTopMusic();
        if(req.query.keyword != undefined && req.query.keyword.trim() !=''){
            api.search(req.query.keyword).then((result)=>{
                let musics = [];
                result.data.array.forEach(element => {
                    musics.push({
                        title: element.title,
                        preview: element.preview,
                        cover: topMusic.getCover(element.album)
                    });
                });
                res.render('home',{musics});

             });

        }else{
            res.render('home');
         }
})
}
