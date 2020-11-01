import React,{useContext} from 'react'
import profileContext from '../Context/Profiles/profileContext'
import MovieItem from './MovieItem'
const Search = () => {
    const profileCon = useContext(profileContext)
    return (
        <div  className='genre-container'>
      {profileCon.profiles === null ? (
        null
      ) : (
        profileCon.profiles.map((e) => {
          return (
            <MovieItem
              link={e.link}
              src={e.imgsrc}
              title={e.title}
              key={e._id}
              desc={e.desc}
              quality={e.quality}
              topimdb={e.topimdb}
            />
          );
        })
      )}
    </div>
    )
}

export default Search
