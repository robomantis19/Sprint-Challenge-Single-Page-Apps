import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
 console.log("Characters props", props.characters)
  // const [searchWord, setSearchWord] = useState(""); 
  // const [searchfilter, setSearchFilter] = useState([]); 

  


  // const handleChange = (event) => { 
  //   setSearchWord(event.target.value)
  // }

  // useEffect(() => { 
  //   if(searchWord != ""){
  //     const output = props.characters.filter((cartoon) => { 
  //       console.log(searchWord); 
  //       return cartoon.name.toLowerCase().includes(searchWord.toLowerCase())
  //     });
  //     console.log('hello world')
  //     console.log("results", output);
  //     setSearchFilter(output);  
  //     console.log("search filter", searchfilter)
  //   }else if(searchWord === "") {
  //     setSearchFilter([]);
  //   }
  // },[props.characters])
  return (
    <section className="search-form">
     {/* <form>
       <label>
         Character Name:  
        <input
        name="name"
        type="text"
        value={searchWord}
        onChange={handleChange}>
        </input>
      </label>
     </form> */}
    </section>
  );
}

