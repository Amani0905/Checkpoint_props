import React from 'react'
import propTypes from 'prop-types'

const Profile = ({fullName,bio,profession,children,handleName}) => {
  return (
    <div style={{backgroundColor:'darkBlue',textAlign:'center'}}>
        <h1 style={{color:'white',textAlign: 'center'}}>{fullName}</h1>
    <h1 style={{color:'white',textAlign: 'justify', textJustify:'interWord', textJustify:'center',padding:'20px'}}>{bio}</h1>
    <h1 style={{backgroundColor:'white',textAlign:'center',color:'darkBlue'}}>{profession}</h1>
    <span style={{textAlign: 'center'}}>{children}</span>
    <div>
    <button style={{color:'white',backgroundColor:'darkBlue'}} onClick={handleName}> Click</button>
    </div>
    </div>

  )
}
Profile.defaultProps={
    fullName:"Name and Last Name",
    bio:"My bio ",
    profession:"My Profession",
    
}
Profile.propTypes={
  fullName:propTypes.string,
  bio:propTypes.string,
  profession:propTypes.string,
}

export default Profile