import { useState, useEffect } from "react";


export default function ContrastChecker({ Hexvalue, ColorTextValue }) {
    const [contrastchecker, setContrastChecker] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
    async function checkContrast(){
         setLoading(true);
         try {
             const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          method: "POST",
          body: JSON.stringify({ 
          colors: [Hexvalue, ColorTextValue]       
        }),
          headers: {
           "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("Raw response", data);
      console.log(Hexvalue)

        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }


      if (data.overall) {
        setContrastChecker(data.overall === "Yup" ? "Good contrast" : "Bad contrast");
      } else {
        setContrastChecker("Coulnd't be checked");
      }
         } catch (error) {
           setContrastChecker("Error");
         } finally {
        setLoading(false);
      }}

        checkContrast();
},[Hexvalue, ColorTextValue]);
    
    


    return (
        <div>
            <p>{contrastchecker}</p>
    
        </div>
    );
}