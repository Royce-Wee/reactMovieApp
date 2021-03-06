import React, {
    useEffect,
    useState
} from 'react'
import Footer from '../components/Footer'
import MovieCarosel from '../components/MovieCarosel'
import Navbar from '../components/Navbar'
import Background from '../Public/Images/background3.jpg'
import {Link} from 'react-router-dom'
import { 
    GetDataByGenre,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
    fetchUpComingMovies
 } from '../API/context'

/*
    Have the page "load" and when "loading" have rewind come in from the rigt side but last letter to fist letter stop so its centered
    and have the rewind logo drop down from the top  
 */

/* All Genres 
    0: {id: 28, name: 'Action'}
    1: {id: 12, name: 'Adventure'}
    2: {id: 16, name: 'Animation'}
    3: {id: 35, name: 'Comedy'}
    4: {id: 80, name: 'Crime'}
    5: {id: 99, name: 'Documentary'}
    6: {id: 18, name: 'Drama'}
    7: {id: 10751, name: 'Family'}
    8: {id: 14, name: 'Fantasy'}
    9: {id: 36, name: 'History'}
    10: {id: 27, name: 'Horror'}
    11: {id: 10402, name: 'Music'}
    12: {id: 9648, name: 'Mystery'}
    13: {id: 10749, name: 'Romance'}
    14: {id: 878, name: 'Science Fiction'}
    15: {id: 10770, name: 'TV Movie'}
    16: {id: 53, name: 'Thriller'}
    17: {id: 10752, name: 'War'}
    18: {id: 37, name: 'Western'}
*/


//usestate to controle conditional rendering and if the serach is used setstate of search to true and if true display search results


function Home(props) {
    const [search, setSearch] = useState(false);
    const [searchQuery ,setSearchQuery] = useState('')
    const [movieData, setMovieData] = useState([]) //state to disply once search has added items to moviedata

    const allGenres = [
        {id: 28, name: 'Action'},
        {id: 12, name: 'Adventure'},
        {id: 16, name: 'Animation'},
        {id: 35, name: 'Comedy'},
        {id: 80, name: 'Crime'},
        {id: 99, name: 'Documentary'},
        {id: 18, name: 'Drama'},
        {id: 10751, name: 'Family'},
        {id: 14, name: 'Fantasy'},
        {id: 36, name: 'History'},
        {id: 27, name: 'Horror'},
        {id: 10402, name: 'Music'},
        {id: 9648, name: 'Mystery'},
        {id: 10749, name: 'Romance'},
        {id: 878, name: 'Science Fiction'},
        {id: 10770, name: 'TV Movie'},
        {id: 53, name: 'Thriller'},
        {id: 10752, name: 'War'},
        {id: 37, name: 'Western'}
    ]


    useEffect(() => {
        document.title = "Rewind - Home"
        if(searchQuery !== ''){
            if(searchQuery.toLowerCase() === allGenres[0].name.toLowerCase()){
                Search(allGenres[0].id)
            }else if(searchQuery.toLowerCase() === allGenres[1].name.toLowerCase()){
                Search(allGenres[1].id)
            }else if(searchQuery.toLowerCase() === allGenres[2].name.toLowerCase()){
                Search(allGenres[2].id)
            }else if(searchQuery.toLowerCase() == allGenres[3].name.toLowerCase()){
                Search(allGenres[3].id)
            }else if(searchQuery.toLowerCase() == allGenres[4].name.toLowerCase()){
                Search(allGenres[4].id)
            }else if(searchQuery.toLowerCase() == allGenres[5].name.toLowerCase()){
                Search(allGenres[5].id)
            }else if(searchQuery.toLowerCase() == allGenres[6].name.toLowerCase()){
                Search(allGenres[6].id)
            }else if(searchQuery.toLowerCase() == allGenres[7].name.toLowerCase()){
                Search(allGenres[7].id)
            }else if(searchQuery.toLowerCase() == allGenres[8].name.toLowerCase()){
                Search(allGenres[8].id)
            }else if(searchQuery.toLowerCase() == allGenres[9].name.toLowerCase()){
                Search(allGenres[9].id)
            }else if(searchQuery.toLowerCase() == allGenres[10].name.toLowerCase()){
                Search(allGenres[10].id)
            }else if(searchQuery.toLowerCase() == allGenres[11].name.toLowerCase()){
                Search(allGenres[11].id)
            }else if(searchQuery.toLowerCase() == allGenres[12].name.toLowerCase()){
                Search(allGenres[12].id)
            }else if(searchQuery.toLowerCase() == allGenres[13].name.toLowerCase()){
                Search(allGenres[13].id)
            }else if(searchQuery.toLowerCase() == allGenres[14].name.toLowerCase()){
                Search(allGenres[14].id)
            }else if(searchQuery.toLowerCase() == allGenres[15].name.toLowerCase()){
                Search(allGenres[15].id)
            }else if(searchQuery.toLowerCase() == allGenres[16].name.toLowerCase()){
                Search(allGenres[16].id)
            }else if(searchQuery.toLowerCase() == allGenres[17].name.toLowerCase()){
                Search(allGenres[17].id)
            }else if (searchQuery.toLowerCase() === 'popular'){
                PopularMovies()
            }
            else if (searchQuery.toLowerCase() === 'now playing'){
                NowPlaying()
            }
            else if (searchQuery.toLowerCase() === 'top rated'){
                TopRated()
            }
            else if (searchQuery.toLowerCase() === 'upcoming'){
                Upcoming()
            }else{
                setMovieData([])
            }
            
        }
    },[searchQuery])

    function Search(query){
        GetDataByGenre(query)
            .then(res => {
                setMovieData(res.results)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function PopularMovies (){
        fetchPopularMovies()
            .then(res => {
                setMovieData(res)
            })
            .catch(error => {
                console.error(error)
            })
    }
    
    function TopRated(){
        fetchTopRatedMovies()
            .then(res =>{
                setMovieData(res)
            })
            .catch(error => {
                console.error(error)
            })
    }

    function NowPlaying(){
        fetchNowPlayingMovies()
            .then(res =>{
                setMovieData(res)
            })
            .catch(error => {
                console.error(error)
            })
    }

    function Upcoming(){
        fetchUpComingMovies()
            .then(res =>{
                setMovieData(res)
            })
            .catch(error => {
                console.error(error)
            })
    }

    function Submit (e){
        e.preventDefault()
        let searchQuery = document.querySelector('.search-input')
        setSearchQuery(searchQuery.value)
        setSearch(true)
        //will update the state so useEffect will run again
        searchQuery.value = ""
    }

    return (
        <div className="home-container">
            <Navbar />
            <div className='search'>
                <form className='Search-box'>
                    <select className='search-input' name='genres'>
                        <option value='Top Rated'>Top Rated</option>
                        <option value='Popular'>Popular</option>
                        <option value='Now Playing'>Now Playing</option>
                        <option value='Upcoming'>Upcoming</option>
                        <option value={allGenres[0].name}>{allGenres[0].name}</option>
                        <option value={allGenres[1].name}>{allGenres[1].name}</option>
                        <option value={allGenres[2].name}>{allGenres[2].name}</option>
                        <option value={allGenres[3].name}>{allGenres[3].name}</option>
                        <option value={allGenres[4].name}>{allGenres[4].name}</option>
                        <option value={allGenres[5].name}>{allGenres[5].name}</option>
                        <option value={allGenres[6].name}>{allGenres[6].name}</option>
                        <option value={allGenres[7].name}>{allGenres[7].name}</option>
                        <option value={allGenres[8].name}>{allGenres[8].name}</option>
                        <option value={allGenres[9].name}>{allGenres[9].name}</option>
                        <option value={allGenres[10].name}>{allGenres[10].name}</option>
                        <option value={allGenres[11].name}>{allGenres[11].name}</option>
                        <option value={allGenres[12].name}>{allGenres[12].name}</option>
                        <option value={allGenres[13].name}>{allGenres[13].name}</option>
                        <option value={allGenres[14].name}>{allGenres[14].name}</option>
                        <option value={allGenres[15].name}>{allGenres[15].name}</option>
                        <option value={allGenres[16].name}>{allGenres[16].name}</option>
                        <option value={allGenres[17].name}>{allGenres[17].name}</option>
                    </select>
                    <button type="submit" className='search-btn' onClick={Submit}>Search</button>
                </form>
            </div>
            {search 
                ?movieData.length > 0
                    ?<div className='search-container'>
                        {movieData.map((item, key) => {
                            return <div key={key} className='search-card'>
                                <Link to={`/IndividualMovie:${item.id}`}>
                                    <img src={"https://image.tmdb.org/t/p/original"+item.poster_path} />
                                </Link>
                            </div>
                        })}
                     </div>
                    :<div className='loading-container'><h1>Searching...</h1></div>
                :<div className="content-container"> 
                    <img className='background' src={Background} />
                    <MovieCarosel query={'popular'} genre={"Popular"}/>
                    <MovieCarosel query={28} genre={"Action"}/>
                    <MovieCarosel query={27} genre={"Horror"}/>
                    <MovieCarosel query={35} genre={"Comedy"}/>
                    <MovieCarosel query={9648} genre={"Mystery"}/>
                    <MovieCarosel query={18} genre={"Drama"}/>
                    <MovieCarosel query={16} genre={"Animation"}/>
                    <MovieCarosel query={10752} genre={"War"}/>
                </div>
            }
            <Footer />
        </div>
    )
}
export default Home
