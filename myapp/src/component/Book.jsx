import React from 'react'
import { useState , useEffect} from 'react';
import Header from './Header';
import axios from "axios"
function Book(props) {
    const [data, setData] = useState([]);
    const [dupData , setDupData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: {
            'Authorization': 'whatever-you-want',
          },
        });
        setData(response.data.books);
        setDupData(response.data.books)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    console.log(dupData)
    fetchData();
  },[])

  const searchFun = (e) =>{
    let value = e.target.value.toLowerCase()
    if (value==""){
      setDupData(data)

    }else{
      let temp = data.filter((obj)=>{
        console.log(obj.title)
        return obj.title.toLowerCase().startsWith(value)
      })
      setDupData(temp)
    }
    
  }

  const srcool = () =>{
    window.scrollTo({ top: 260, left:0, behavior: 'smooth' })
   }

  return (
    <>
    <Header props = {props}></Header>
        <div id='heading'>
            <div id='divWel'>
                <h1 className='welcome'>Join to access our best free</h1><br />
                <h1 className='welcome'> & discounted ebooks.</h1><br />
                <p>We find the best ebook deals so you don't have to. Never pay full price again.</p>
            </div>
            <div id='inputDiv'>
                <input type="text" onChange={searchFun} placeholder='Search.....' />
                <button onClick={srcool}>Search</button>
            </div>
        </div>

        <div id='content'>
            <h1>Explore All Deals</h1>

            <div>
                <div>

                </div>

                <div id='con-book'>
                    
                    {
                        dupData.map( (item,index) => (
                            <div key={index} className='books'>
                                <img className='books_img' src={item.imageLinks.thumbnail} alt="" />
                                <p className='title'>{item.title}</p>
                                <p className='categ'>{item.categories}</p>
                                <p className='rate'>Free</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

        <footer>
          <p>&copy; 2024 Jesudas Zion. All rights reserved.</p>
        </footer>
    </>
  )
}

export default Book