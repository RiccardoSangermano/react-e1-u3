import Alert from 'react-bootstrap/Alert';


function MyAlert() {
return (
<Alert className='my-2 bg-danger text-light' variant="success">
<Alert.Heading className='text-center'>Hey nice to see you</Alert.Heading>
<p className='text-center'>
Aww yeah, you successfully read this important alert message. This
example text is going to run a bit longer so that you can see how
spacing within an alert works with this kind of content.
</p>
<hr />
<p className='text-center'>
Whenever you need to, be sure to use margin utilities to keep things
nice and tidy.
</p>
</Alert>
  )
}

export default MyAlert