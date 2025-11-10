import React , {useState,useEffect} from "react"
import NewElement from "./NewsElement"
import axios from "axios"

//
const  NewsCatalogue =()=>{
	const [articles,setArticles] = useState([])
	    useEffect(() => {
		// Correct: Declaring and initializing a const variable within useEffect
		const fetchArticles = async () => {
			const response = await axios.get(" https://newsdata.io/api/1/latest?apikey=pub_04a3c96580fb4e1099d0f51a68bc092a&q=pizza")
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
					return (<div>{article.article_id}</div>)
			})}
		</div>
	)
}

export default NewsCatalogue
