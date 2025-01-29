/* eslint-disable react/prop-types */

const ErrorMessage = ({items}) => {
 
  return (
    <>
    {items.length===0 && <h1>I&apos;m still hungry</h1>
       }
    </>
  )
}

export default ErrorMessage