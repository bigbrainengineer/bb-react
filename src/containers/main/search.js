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
          value={props.search.text}
          onChange={props.updateSearchText}
          onKeyPress={props.searchVideos}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => props.searchAsync(props.search.text)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    {props.showLoader ?
      <div className="row">
        <div className="col-9">loading...</div>
      </div> :
      props.search.video ?
        <div className="row">
          <div className="col-9">
            <div className="">
              <iframe title="video_yt" src={props.search.video.src} width="100%" height="500" />
            </div>
            <div className="row mt-3">
              <div className="col-5">
                <b>{props.search.video.title}</b>
              </div>
              <div className="col-5">
                {
                  props.playlist.videos ?
                    <div>
                      {
                        props.playlist.videos.map((video, id) => (
                          <div key={id}>
                            {video.id}
                          </div>
                        ))
                      }
                    </div>
                    : null
                }
              </div>
              <div className="col-2">
                {props.search.video ? <button onClick={props.addToPlaylist}>+add</button> : null}
                {
                  props.playlist.showCategories
                    ?
                    <div>
                      {
                        props.playlist.categories.map((category, id) => (
                          <div key={id}>
                            <input className="categories" type="checkbox" value={category.name}
                                   onClick={() => props.addInPlaylistAsync(props.search.video)}/>
                            {category.name}
                          </div>
                        ))
                      }
                    </div>
                    :
                    null
                }
                {props.playlist.added ? 'added...' : null}
              </div>
            </div>
          </div>
          <div className="col-3">
            {
              props.search.videos.map((video, id) =>
                (<div
                  className="row mb-3"
                  key={id}
                >
                  <div className="col">
                    <img
                      className="row"
                      src={video.img.url}
                      alt={video.img.url}
                      width="160"
                      height="115"
                      onClick={() => props.loadVideo(video)}
                    />
                  </div>
                  <div className="col">
                    {video.title}
                  </div>
                 </div>))
            }
          </div>
        </div>
        : null
    }
  </div>
);
