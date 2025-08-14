function Profile(props){

    // Props Receive >>props >> parameter
    console.log(props) //props 
    console.log(props.name)

    // JSX >> JavaScript XML
    // html like syntax in JS
    // JS code >>inside HTML code >> {JS code}
    // handling errors >> console >> code break
    // handling errors >> console >> document flow break
    return(
        <>
            <div className='profileContainer'> 
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt="" height='100' width='100'/>
                <div>{props.name || 'Unknown'}</div>
                <div>{props.designation || 'Unknown Designation'}</div>
                {/* icons */}
                {/* window key + . */}
                <div>⚠🌐🈯Ⓜ🆒🆖</div> 
                </div>
        </>
    )
}
export default Profile