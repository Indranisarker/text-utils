import React, {useState} from 'react'

export default function TextForm(props) {
      //to change the text value then use setText function 
    //setText("new text");
    const[text, setText] = useState("");
    const[wordCount, setWordCount] = useState('');
    // const[darkStyle, setDarkStyle] = useState({
    //   color:'black',
    //   backgroundColor:'white',
    //   borderRadius:'20px',
    //   width: '100%',
    //   height:'500px',
    // });
    // const[btnText, setBtnText] = useState("Enable Dark Mood")

    // const toggleColor = ()=>{
    //   if(darkStyle.color === "black"){
    //     setDarkStyle({
    //       color:'white',
    //   backgroundColor:'black',
    //   borderRadius:'20px',
    //   width: '100%',
    //   height:'500px',
    //     })
    //     setBtnText("Enable Light Mood");
    //   }
    //   else{
    //     setDarkStyle({
    //       color:'black',
    //       backgroundColor:'white',
    //     })
    //     setBtnText("Enable Dark Mood")
    
    //   }
    // }
 
    const handleUpperCase = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to upperCase!", "success");
    }
    const handleLowerCase = ()=>{
      setText(text.toLowerCase());
      props.showAlert("Converted to lowerCase!", "success");
  }

  const countWords = ()=>{
    const counts = countWordOccurrences(text);
    const formattedCounts = Object.entries(counts)
      .map(([word, count]) => `${word}: ${count}`)
      .join(', ');
    setWordCount(formattedCounts);
    props.showAlert("Count each word occurences successfully!", "success");
  }
  const countWordOccurrences = (text) => {
    const words = text.toLowerCase().split(' ');
    const wordCounts = {};
    words.forEach(word =>{
      word = word.replace(/[.,!?;:()]/g, '');

      if(wordCounts[word]){
        wordCounts[word]++;
      }
      else{
        wordCounts[word] = 1;
      }
    });
    return wordCounts;
  }
  const handleClearText = ()=>{
    setText('');
    setWordCount('');
    props.showAlert("Clear the text!", "danger");
} 
const handleCopyText = ()=>{
  let text = document.getElementById('myBox'); //take the text form textarea
  text.select();//selct all the text
  navigator.clipboard.writeText(text.value);//paste or write the text value
  props.showAlert("Coppied to clipboard!", "success");
} 
const handleExtraSpace = ()=>{
  let newText = text.split(/[ ]+/); //remove one or more spaces from the text and convert it into an array which consists of words.
  setText(newText.join(' '));//after getting words then join the words with single space.
  props.showAlert("Removed extra spaces!", "success");

}
  //onChange function give us a event which can be used to edit or write any text in the text area.
    const handleOnChange = (event)=>{
        setText(event.target.value); // set previous text with new text
    }
   
  return (
    <>
    <div className='container'>
    <div className='container my-5'>
    {/* <button className="btn btn-primary my-3" style={{float:'right'}} onClick={toggleColor}>{btnText}</button> */}
        <h1 className={`my-4 text-${props.mode === 'light'?'dark' : 'light'}`}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control mb-3" value={text} placeholder='Enter your text...'
        onChange={handleOnChange} id="myBox" rows={5}> 
        {/* // onChange event enable us to type or write something in text field and set that text to the {text} state. */}
        </textarea>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLowerCase}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={countWords}>Count Word Occurrences</button>
        <button  disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button  disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearText}>Clear Text</button>
       
      
      
        </div>
    </div>
    <div className={`container my-3 text-${props.mode === 'light'?'dark' : 'light'}`}>
      <h2>Your text summary</h2>
      <h6>Number of words: {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} and Number of characters: {text.length}</h6>
      <p>Approximately {0.008 * text.split(' ').filter((element) => element.length !== 0).length} minutes needed to read the words.</p>
      <div>{wordCount}</div>
      <h2>Preview the text</h2>
      <p>{text.length > 0? text: "Nothing to preview!!"}</p>
    </div>
    </div>
    </>
  )
}
