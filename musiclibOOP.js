class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlist = [];
    }

  addPlaylist (playlist) {
    this.playlist.push(playlist);
  }

  getLibrary () {
    return `Name: ${this.name}, Creator: ${this.creator}, Playlist: ${this.playlist}`;
  }
}

class Playlist {
  constructor (name) {
    this.name = name;
    this.tracks = [];
  }
  //Get the overall rating of a playlist based on track rating 
  overallRating () {
    let overall = 0;
    let tracksLength = this.tracks.length;
    let avg = 0;

    if (tracksLength > 0) {
      for (let track of this.tracks) {
        overall += Number(track.rating);
      }
      avg = Math.floor(overall / tracksLength);
    }
    return avg;
  }

  //Get the overall duration of a playlist based on the total track length 
  totalDuration () {
    let sum = 0;
    if (this.tracks.length > 0) {
      for (let track of this.tracks) {
        sum += Number(track.length);
      }
    }

    return sum;
  }

  //Add a new track to the playlist
  addTracks (track) {
    this.tracks.push(track);
  }
 
  //Return the playlist 
  getPlaylist () {
    return `Name: ${this.name}, Tracks: ${this.tracks}`;
  }
}


class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating; 
    this.length = length; 

    if (typeof(rating) != "number" || rating > 5 || rating < 1) { throw Error("You must enter a number from 1 to 5") }
    if (typeof(length) != "number") { throw Error("You must enter a number") }
  }

  getTrack () {
    return `Title: ${this.title}, Rating: ${this.rating}, Length: ${this.length} seconds`;
  }  
}

//Creating new tracks
let track1 = new Track("Track One", 5, 120);
console.log(track1.getTrack());
let track2 = new Track("Track Two", 4, 180);
console.log(track2.getTrack());
let track3 = new Track("Track Three", 3, 240);
console.log(track3.getTrack());



let playlistA = new Playlist("Amy's Faves");
playlistA.addTracks(track1);
playlistA.addTracks(track2);
console.log(playlistA.getPlaylist());
console.log("Playlist rating: ", playlistA.overallRating());
console.log("Playlist length: ", playlistA.totalDuration());

// let library = new Library ("My Music", "Amy")
// console.log(library.addPlaylist(playlist1));
// console.log(library.getLibrary());