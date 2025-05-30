import React from 'react'
import './News.css'
import { news } from '../../assets/assets'
import { FaEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
const News = () => {
  return (
    <div className='news'>
      <h2>BETTER INFORMATION,BETTER HEALTH</h2>
      <h1>News</h1>
      <div className="allnews">
      {news.map((article,index)=>{
        return <div className="article" key={index}>
            <img src={article.image} alt="" />
            <div className="info">
            <p className='p1'>{article.date}</p>
            <p>{article.article}</p>
            <div className="likes">
            <FaEye color='deepskyblue' size={25} /> <span>68</span>
            <CiHeart color='red' size={25} className='heart' /> <span>86</span>
            </div>
            
            </div>
            
            
        </div>
      })}
      </div>
    </div>
  )
}

export default News
