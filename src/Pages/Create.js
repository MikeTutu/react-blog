import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    const [type, setType] = useState('')

    const [isLoading, setLoading] = useState(false);
    const history = useHistory();
    const url = 'http://localhost:8000/blogs';

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newBlog = {title, author, body, type};

        setLoading(true);

        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newBlog)
        })
        .then(()=>{
            console.log('saved');
            setLoading(false)
            history.push('/');
        })
    }

    return (  
        <div style={{margin:'150px'}}>
            <div className="ui form">
                <form onSubmit={handleSubmit}>
                    <div className="fields">
                        <div className="six wide field">
                            <label>Blog Title</label>
                            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="shipping[first-name]" placeholder="Title" required/>
                        </div>
                        <div class="six wide field">
                            <label>Author</label>
                            <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} name="shipping[last-name]" placeholder="Author's Name" required/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Content</label>
                        <textarea className="twelve wide field" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                    </div>
                    <div className="field">
                        <div className="two wide field">
                            <label>Blog Type</label>
                            <select value={type} onChange={(e)=>setType(e.target.value)}>
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>
                    <div style={{float:'right', marginRight:'400px'}}>
                        {/* <input className="ui primary button" type="button" value="Submit" /> */}
                        {!isLoading && <button className="ui primary button">Add Blog</button>}
                        {isLoading && <button className="ui primary button" disabled>Add Blog</button>}
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Create;