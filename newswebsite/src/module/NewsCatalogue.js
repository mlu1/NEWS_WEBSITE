import React , {useState,useEffect} from "react"
import NewsElement from "./NewsElement"
import axios from "axios"

//
const  NewsCatalogue =()=>{
	var topic 
	topic = "politics"
	const [articles,setArticles] = useState([])
	    useEffect(() => {
		// Correct: Declaring and initializing a const variable within useEffect
		const fetchArticles = async () => {
			const response = await axios.get("https://newsdata.io/api/1/latest?apikey={API_KEY}&q={topic}&size=10")	
			setArticles(response.data.results || [])
			//print data
			console.log(response)
			};
		fetchArticles();
		}, []);
	return (
		<div>
			{
				articles.map(article=>{
					return (
					<NewsElement
						title={article.title}
						description = {article.description}
						url = {article.url}
						urlToImage={article.urlToImage}
					/>
					)
			})}
		</div>
	)
}

export default NewsCatalogue
