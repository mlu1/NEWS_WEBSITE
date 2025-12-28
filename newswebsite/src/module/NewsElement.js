import "./NewsElement.css"
import React from "react"

const NewsElement=({title,description,url,urlToImage})=>{
	return (
		<div className="newswebsite">
				<div className="newselement">
					<img className = "newsimage" src={urlToImage} alt={urlToImage}/>
					<h3 className="title_bar"><a href = {url}>{title}</a></h3>
					<p>{description}</p>
				</div>
		</div>
	)
}
export default NewsElement