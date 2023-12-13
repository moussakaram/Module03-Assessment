import Header from '../components/Header'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {



    const [data, setData] = useState([]);

    useEffect(() => {
        fetching();
    }, []);

    const fetching = async () => {
        try {
            const getallArticles = await axios.get('http://localhost:8000/api/articale');
            const getAllarticle = getallArticles.data;
            setData(getAllarticle);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
  return (
   
   
    <div>
             {data.map((article, index) => (
                    <div key={index}>
                     <Card sources={article.imageUrl} title={article.title} description={article.description} />
                       
                    </div>
                ))}

         <Header/>
         <Card  />

        
    </div>
  )
}

export default Home
