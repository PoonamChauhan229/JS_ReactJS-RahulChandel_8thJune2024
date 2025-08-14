import './App.css'
import Profile from './components/profile'

function App() {
  return (
  <>

  {/* 
    profile image
    profile name
    profile description
    profile links
  */}


<div className='container'>
  {/* Properties */}
  {/* Props Passing >> Render dynamically  */}
  {/* loops >> map method */}
<Profile name="Rohit C" designation="Frontend Developer" />
<Profile name="Shraddha C" designation="System Enginner"/>
<Profile name="Azad" designation="Civil Engineer"/>
<Profile name="Archana" designation="Backend Developer"/>
<Profile/>
<Profile/>
<Profile/>
<Profile/>
<Profile/>
</div>

   
  </>
  )
}

// Messages >> 2 message >> WhatsApp >> 1 message left >> 1 message right

export default App

// ProfileDynamic
