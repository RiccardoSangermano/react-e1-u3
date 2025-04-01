import Alert from 'react-bootstrap/Alert';

function RedAlert() {
  return (
    <Alert variant="danger">
        <Alert.Heading>Attenzione!</Alert.Heading>
      This is a danger alert with{' '}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
      you like.
    </Alert>
  );
}

export default RedAlert;