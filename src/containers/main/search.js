import React from 'react';

export default props => (
    <div>
        <input type="text" onChange={props.updateSearchText}/>
        <button onClick={props.searchAsync}>search</button>
        <div>
            {
                props.showLoader ? 'loading...' :
                    props.searchResult.map(
                        ({id, src}) =>
                            <iframe key={id} width="300" height="200" src={src} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen={true}></iframe>
                    )
            }
        </div>
    </div>
)