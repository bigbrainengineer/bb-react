import React from 'react';

export default props => (
  <div className="col-8 offset-2">
    <div className="row">
      <div className="input-group mb-3 col-9 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search in youtube"
          aria-label="Search in youtube"
          aria-describedby="basic-addon2"
          value={props.text}
          onChange={props.updateSearchText}
          onKeyPress={props.searchVideos}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => props.searchAsync(props.text)}>
            Search
          </button>
        </div>
      </div>
    </div>
    {props.showLoader ?
      <div className="row">
        <div className="col-9">loading...</div>
      </div> :
      props.video ?
        <div className="row">
          <div className="col-9">
            <div className="">
              <iframe title="video_yt" src={props.video.src} width="100%" height="500" />
            </div>
            <div className="row">
              <div className="col">
                <b>{props.video.title}</b>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {props.video.description}
              </div>
            </div>
          </div>
          <div className="col-3">
            {
              props.videos.map
              ((video, id) =>
                <div
                  className="row mb-3"
                  key={id}
                >
                  <div className="col">
                    <img
                    className="row"
                      src={video.img.url}
                      alt={video.img.url}
                      width='160'
                      height='115'
                      onClick={() => props.loadVideo(video)}
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