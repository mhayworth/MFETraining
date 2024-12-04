import { useState } from "react";

const Song = ({song, recordVote}: SongPropsType): React.ReactElement => {
    return (
        <li>{song.title} by {song.artist} with {song.numVotes} votes <button onClick={() => recordVote(song.artist)}>Vote for this song</button></li>
    )
}

const Songlist = (): React.ReactElement => {

    const addVote = (artist: string): void => {
        const newSongs: SongType[] = songs.map((song) => {
            if (song.artist === artist) {
                return {...song, numVotes: (song.numVotes + 1)}
            }
            return song
        })
        setSongs(newSongs)
    }

    const [showSongs, setShowSongs] = useState<boolean>(true);
    const [songs, setSongs] = useState<SongType[]>([{title: "Last thing on my mind", artist: "Steps", numVotes: 0}, {title: "If you're over me", artist: "Years and Years", numVotes: 0}])
    const [showAll, setShowAll] = useState<boolean>(true)

    return (
        <>
            <h1>Your favorite songs are</h1>
            <button onClick={() => setShowSongs(!showSongs)}>{showSongs?"Hide Songs":"Show Songs"}</button>
            <button onClick={()=> setShowAll(!showAll)}>{showAll?"Show only songs with 2+ votes":"Show all songs"}</button>
            {/* <button onClick={() => {setSong1({...song1, title:"First thing on my mind"}); setSong2({...song2, title: "Hello world"})}}>Change Songs</button> */}
            <ul style={{display: showSongs?"block":"none"}}>
                {songs.map((song) => {return showAll ? <Song key={song.artist} song={song} recordVote={addVote}/> : song.numVotes > 1 && <Song key={song.artist} song={song} recordVote={addVote}/>})}
            </ul>
        </>
    )

}

type SongPropsType = {
    song: SongType,
    recordVote: (artist: string) => void
}

type SongType = {
    title: string;
    artist: string;
    numVotes: number;
  };

export default Songlist