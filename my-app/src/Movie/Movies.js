import React from "react";
import data from "../Movie/MOCK_DATA.json";
import { Link } from "@mui/material";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  changeAthe, movieName } from "../features/counter/Slice";

const Movie = () => {

    const data=[
        {"image":"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTQuNEsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00322925-kurhuyumbw-portrait.jpg","rating/likes":"Sarah","movie_title":"Akilan","genre":"Action/Drama/Thriller"},
        {"image":"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICAxN0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00335415-fppfnsugwg-portrait.jpg","rating/likes":"Aurelia","movie_title":"Vaathi","genre":"Action/Drama"},
        {"image":"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAxNS42SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00349087-jlwphflscy-portrait.jpg","rating/likes":"Trudie","movie_title":"Dada","genre":"Drama/Family"},
        {"image":"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICAxMC4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347237-wmnztybfrl-portrait.jpg","rating/likes":"Steve","movie_title":"Tu Jhoothi Main Makkaar","genre":"Comedy/Romantic"},
        {"image":"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICAyLjRLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00350136-vglxaabfag-portrait.jpg","rating/likes":"Angil","movie_title":"Ayothi","genre":"Drama"},
        {"image":"http://dummyimage.com/165x100.png/5fa2dd/ffffff","rating/likes":"Dedra","movie_title":"Brenda Starr","genre":"Adventure"},
        {"image":"http://dummyimage.com/154x100.png/cc0000/ffffff","rating/likes":"Robinett","movie_title":"Ricky Gervais Live 4: Science","genre":"Comedy"},
        {"image":"http://dummyimage.com/175x100.png/ff4444/ffffff","rating/likes":"Portia","movie_title":"Go Tigers!","genre":"Documentary"},
        {"image":"http://dummyimage.com/211x100.png/ff4444/ffffff","rating/likes":"Mead","movie_title":"Emperor","genre":"Drama|War"},
        {"image":"http://dummyimage.com/202x100.png/5fa2dd/ffffff","rating/likes":"Albie","movie_title":"Dragonheart 3: The Sorcerer's Curse","genre":"Action|Adventure|Fantasy"},
        {"image":"http://dummyimage.com/194x100.png/ff4444/ffffff","rating/likes":"Faythe","movie_title":"Adult Camp","genre":"Comedy"},
        {"image":"http://dummyimage.com/117x100.png/cc0000/ffffff","rating/likes":"Syman","movie_title":"Pandora's Box","genre":"Drama|Thriller"},
        {"image":"http://dummyimage.com/216x100.png/dddddd/000000","rating/likes":"Dolly","movie_title":"Restrepo","genre":"Documentary|War"},
        {"image":"http://dummyimage.com/164x100.png/dddddd/000000","rating/likes":"Otho","movie_title":"Taxidermia","genre":"Comedy|Drama|Horror"},
        {"image":"http://dummyimage.com/108x100.png/ff4444/ffffff","rating/likes":"Wynne","movie_title":"Fall of the House of Usher, The (House of Usher)","genre":"Horror"}
    ]

  // const [movie, setMovie] = useState([]);
  const state  = useSelector(({sample})=>sample)
  console.log(state);

  var datas = [];

  for ( var i=0 ; i<5; i++){
    datas[i] = data [i];
  }
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const gotoTheater = (e) =>{
    console.log(e.target.title);
    navigate("/buytickets")
    dispatch(movieName(e.target.title))
    dispatch(changeAthe(true))
  }

  return (
    <>
    <Header />
    <div className="movie_container">
      <div className="recom">
        <h1>Recommended Movies</h1>
        <div className="btn">
          <Link href="#">See All</Link>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
      <div className="movie_row">
        {datas.map((e, index) => (
          <div className="movie_col" key={index}>
            <div className="movie_card"  title={e["movie_title"]} onClick={(e, index)=>gotoTheater(e, index)}>
              <div title={e["movie_title"]}>
                <img
                   title={e["movie_title"]}
                  src={e.image} alt="no"
                ></img>
              </div>
              <h3 title={e["movie_title"]}>{e["movie_title"]}</h3>
              <p title={e["movie_title"]}>{e.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Movie;