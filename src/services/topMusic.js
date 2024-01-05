const axios = require('axios');

module.exports = class {
    getCover(album){
        let pathDest = path.join(__dirname, '..', '..', 'public', 'covers', album.id+".." )
        if(!fs.existsSync(pathDest)){
            console.log(pathDest)
            this.download(album.cover,pathDest);
        }
        return `/covers/${album.id}.jpg`;
    }
    async download(url, path){
      try{
          const response = await axios({
              url: url,
              method: 'GET',
              responseType: 'stream',

          });
          response.data.pipe(fs.createWriteStream(path));
          return new Promise((resolve,reject)=>{
              response.data.on('end',resolve);
              response.data.on('error',reject);
          });
      } catch(error){
          throw new Error('Erreur de téléchargement',error);
      }
    }

}