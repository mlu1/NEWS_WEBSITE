import "./NewsElement.css"
import React from "react"

const NewsElement=({title,description,url,urlToImage})=>{
	return (
		<div className="newswebsite">
				<div clasName="newselement">
					<img className = "newsimage" src={urlToImage} alt={urlToImage}/>
					<h3 clasName="title_bar"><a href = {url}>{title}</a></h3>
					<p>{description}</p>
				</div>
		</div>
	)
}
export default NewsElement