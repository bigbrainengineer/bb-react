import React from 'react';

export default props => (
  <div className="container">
    <div className="row">
      <input type="text" value={props.text} onChange={props.updateSearchText}/>
      <button onClick={() => props.searchAsync(props.text)}>search</button>
    </div>
    {props.showLoader ?
      <div className="row">loading...</div> :
      props.video ?
        <div className="row">
          <div className="col-10">
            <div className="row">
              <iframe title="video_yt" src={props.video.src} width="900" height="500" />
            </div>
            <div className="row">
              {props.video.title}
            </div>
            <div className="row">
              {props.video.description}
            </div>
          </div>
          <div className="col-2">
            {
              props.videos.map(
                (video, id) =>
                  <div
                    className="row"
                    key={id}
                  >
                    <div className="col">
                      <img
                        src={video.img.url}
                        alt={video.img.url}
                        width={video.img.width}
                        height={video.img.height}
                      />
                    </div>
                    <div className="col">
                      {video.title}
                    </div>
                  </div>
              )
            }
          </div>
        </div>
        : null
    }
  </div>
)