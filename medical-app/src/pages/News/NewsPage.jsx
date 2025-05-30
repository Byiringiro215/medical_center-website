import React from 'react'
import './NewsPage.css'
import { Link } from 'react-router-dom'
import { singleNews } from '../../assets/assets'
import { news } from '../../assets/assets'
import { category } from '../../assets/assets'
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
const NewsPage = () => {
  return (
    <div className='news-page' id='news'>
       <div className="news-page-nav">
        <Link to='/' className='link' >Home</Link><span> /  </span>
        <Link to='/news' className='link' >News</Link>
        <h1>Blog Posts</h1>
      </div>
      <div className="blogpost-content">
      <div className="blogpost-content-left">
        {singleNews.map((post,index)=>{
return <div className="post" key={index}>

  <img src={post.image} alt="" />
  <div className="date-info">
  <span><FaRegCalendar color='darkblue' />{post.date}</span>
  <span><CiUser color='deepskyblue' />{post.author}</span>
   <span><FaRegEye color='deepskyblue' />{post.views}</span>
  <span><CiHeart color='red' />{post.likes}</span>
  </div>

  <h3 className='article'>{post.article}</h3>
  <p className='description'>{post.description}</p>
  <button className='learn-more-btn'>Learn More<FaLongArrowAltRight color='darkblue' className='arrow' /></button>
</div>
        })}
      </div>
      <div className="blogpost-content-right">
        <div className="search">
          <input type="text" placeholder='Search' />
           <CiSearch size={30} color='white' className='search-icon' />
        </div>
        
        <div className="recentposts">
          <div className="head">
          <h3>Recent Posts</h3>

          </div>
       
       
          {news.map((singleNews,index)=>{
         return   <div className="singlepost" key={index}>
          <img src={singleNews.image} alt="" />
          <div className="post-info">
            <h5>{singleNews.date}</h5>
            <h4>{singleNews.article}</h4>
          </div>
         </div>
          })}
        </div>

        <div className="categories">
          <h4>Categories</h4>
          <div className="category">
            <ul>
            {category.map((category,index)=>{
              return <li>{category.category} <span className="number">{category.number}</span></li>
            })}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default NewsPage
