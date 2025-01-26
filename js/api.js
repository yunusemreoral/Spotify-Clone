
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '79eac7a873msh477868e3c82eaabp174c4fjsn456e5a128f4e',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};

export class API {
    async getPopular() {
         //const url = "https://shazam.p.rapidapi.com/artists/get-latest-release?id=73406786&l=en-US"
        
        //apı istek at
         //const response = await fetch(url, options);
       
         // apıdan gelen veriyi js nesnesine çevir
         //const data = await response.json();
       
         //const formattedData = data.tracks.hits.map((item) => item.track);
    //return formattedData;

   const data = await this.searchMusic("neffex");
   const data1 = await this.searchMusic("eminem");
   const data2 = await this.searchMusic("tupac");

   return [...data, ...data1, ...data2];
    }

    // aratılan şarkı verisini alan fonksiyon
    async searchMusic(query) {
      const url = `https://shazam.p.rapidapi.com/search?term=${query}`;
    
    // aratılan değer ile api istek at 
      const res = await fetch(url, options);
// gelen veriyi js nesnesine çevir
    const data = await res.json();

    // veriyi uygun şekilde dönüştür
    const formattedData = data.tracks.hits.map((item) => item.track);

    return formattedData;
    }
}