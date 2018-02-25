import React from 'react';

export default props => (
    <div>
        <input type="text" value={props.searchText} onChange={props.updateSearchText}/>
        <button onClick={()=>props.searchAsync(props.searchText)}>search</button>
        <div>
            {
                <ul>{props.searchResult.map(({id, src}) =>
                    (<li key={id}><iframe title={src} width="300" height="200" src={src} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen={true}></iframe></li>)
                )}
                </ul>
            }
        </div>
    </div>
)