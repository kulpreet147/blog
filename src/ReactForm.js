function React_Form(){
    return(
        <div>
            <form>
                <input type="text" placeholder="enter your name"/>
                <br/>
                <br/>
                
                <select >
                    <option>Select your interests</option>
                    <option>Reading</option>
                    <option>Listening music</option>
                    <option>Walk</option>
                </select>
                <br/> 
                <br/>
                <input type="checkbox"/><span>Agree terms and Conditions</span>
                <br/> 
                <br/>
                <button type="submit">submit</button>

            </form>
        </div>
    );
}

export default React_Form;