const Create = () => {
    return (  
        <div style={{margin:'150px'}}>
            <div className="ui form">
                <div className="fields">
                    <div className="six wide field">
                        <label>Blog Title</label>
                        <input type="text" name="shipping[first-name]" placeholder="Title"/>
                    </div>
                    <div class="six wide field">
                        <label>Author</label>
                        <input type="text" name="shipping[last-name]" placeholder="Author's Name"/>
                    </div>
                </div>
                <div className="field">
                    <label>Text</label>
                    <textarea className="twelve wide field"></textarea>
                </div>
                <div className="field">
                    <div className="two wide field">
                        <label>Blog Type</label>
                        <select>
                            <option value="">Public</option>
                            <option value="">Private</option>
                        </select>
                    </div>
                </div>
                <div style={{float:'right', marginRight:'400px'}}>
                    <input className="ui primary button" type="button" value="Submit" />
                </div>
            </div>
        </div>
    );
}
 
export default Create;