import {useState} from "react";
import TextToSpeech from './TextToSpeech';

const BlogPost = () => {
    const [text, setText] = useState("")

    function handleInput(event){
        setText(event.target.value)
    }

    // function handleSubmit(func){
    //     this.handlePlay()
    // }

    return (
        <div>
            <form>
            <input
                type="text"
                onChange={handleInput}
                value={text}
                name="text"
            />
            {/* <button>Play</button> */}
            </form>
        <TextToSpeech text={text}/>
        <p>{text}</p>
        </div>
    );
};

export default BlogPost;