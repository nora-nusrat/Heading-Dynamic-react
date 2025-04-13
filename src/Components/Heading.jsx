import React from 'react'
//=========if we want only one heading=========
//const Heading = ({className, text}) => {
    //let amin = text.replace("#", "<span class='mahdy'>").replace("#", "</span>")

 // return (
 //  <h1 dangerouslySetInnerHTML={{__html: amin}}></h1>
  //)
//}
//== =======if we want multiple heading==========
const Heading = ({text}) => {
    let pattern = /#([^#]+)#/g;
    let amin = text.replace (pattern, "<span class='mahdy'>$1</span>")
    return (
        <h1 dangerouslySetInnerHTML={{__html: amin}}></h1>
    )
}

export default Heading


//const Heading = ({className, text}) => {
    //console.log(text.split("#"));

    //text.split(" ").map(item=> {
       // console.log(item.includes("#"));

        //if (item.includes("#")) {
          //  let arr = item.split("")
            //arr.pop()
            //arr.shift()
            //console.log(arr.join(""));
            
        //}
    //})


  //return (
   //<h1 className={`${className}`}>{text}</h1>
  //)
//}