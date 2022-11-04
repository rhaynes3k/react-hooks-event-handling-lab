// Code Keypad Component Here

function Keypad (){

  const handlePassword = () => {
    console.log('Entering password...')
  }
    return (
        <div>
          <input type='password' onChange={handlePassword}/>
        </div>
    )
}

export default Keypad;
