function solution(genres, plays) {
    const genreMap = new Map();
    
    for(let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        if(!genreMap.has(genre)) genreMap.set(genre, []);
        genreMap.get(genre).push({id: i, play})
    }
    console.log(genreMap)
    
    const genreTotalPlays = [];
    
    for(let [genre, songs] of genreMap.entries()) {
        const totalPlay = songs.reduce((sum, song) => sum + song.play, 0);
        
        genreTotalPlays.push({genre, totalPlay});
    }
    
    console.log(genreTotalPlays)
    
    genreTotalPlays.sort((a, b) => b.totalPlay - a.totalPlay);
    
    for(let songs of genreMap.values()) {
        songs.sort((a, b) => {
            if(b.play === a.play) return a.id - b.id;
            return b.play - a.play;
        })
    }
    
    const answer = [];
    
    for(let {genre} of genreTotalPlays) {
        const songs = genreMap.get(genre);
        answer.push(songs[0].id)
        if(songs[1]) answer.push(songs[1].id)
    }
    return answer;
}