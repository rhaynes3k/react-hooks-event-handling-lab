// Code EyesOnMe Component Here
// Code EyesOnMe Component Here

function EyesOnMe () {

  function onFocus () {
    console.log('Good!')
  }

  function onBlur() {
    console.log('Hey! Eyes on me!')
  }

  return(
    <input type='button' value='Eyes on me' onFocus={onFocus} onBlur={onBlur}/>
  )

}

export default EyesOnMe
