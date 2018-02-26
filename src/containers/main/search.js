import React from 'react';

export default props => (
    <div>
        <input type="text" value={props.searchText} onChange={props.updateSearchText}/>
        <button onClick={()=>props.searchAsync(props.searchText)}>search</button>
        {
            props.showLoader ? <div>loading...</div> :
            <div>
                {
                    <ul>{props.videos.map(({id, src}) =>
                        (<li key={id}><iframe title="video_yt" src={src} width="700" height="350" /></li>)
                    )}
                    </ul>
                }
            </div>
        }
    </div>
)