import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <form>
       <label>
         Character Name:  
      <input
       name="name"
       type="text">
      
      </input>
      </label>
     </form>
    </section>
  );
}

