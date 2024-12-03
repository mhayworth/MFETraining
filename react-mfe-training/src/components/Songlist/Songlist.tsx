const Song = ({title, artist}: SongPropsType): React.ReactElement => {
    //fetch song rating
    const rating = Math.floor(Math.random() * 100)
    return (
        <li>{title} by {artist} with rating {rating}/100</li>
    )
}

const songs: SongPropsType[] = [
    {title: "Last thing on my mind", artist: "Steps"}, 
    {title: "If you're over me", artist: "Years and Years"}
];

const Songlist = (): React.ReactElement => {

    return (
        <>
            <h1>Your favorite songs are</h1>
            <ul>
                { songs.map((song, index) => <Song key={index} artist={song.artist} title={song.title}/>) }
            </ul>
        </>
    )

}

type SongPropsType = {
    title: string,
    artist: string
}

export default Songlist