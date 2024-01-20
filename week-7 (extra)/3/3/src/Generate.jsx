export function Generate(props){
    const  words=["hey","there","My","name","is","dhruv","cat","dog","strong"];
    let i=0;
    let para="";
    for(;i<props.length;i++) 
    {
      para+=words[(Math.floor(Math.random()*words.length))]
      para+=" ";
    } 
  return(
    <div>
    {para}
    </div>
  )
}