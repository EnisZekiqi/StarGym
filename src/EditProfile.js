import { useSuccessMessage } from './SuccessMessageContext';

const EditProfile = () => {
    const { formDataArray } = useSuccessMessage();

  // Extract email and password from the form data array
  const email = formDataArray[0];
  const password = formDataArray[1];

  return (
    <div>
      <h2>Success!</h2>
      <p>Here is your form data:</p>
      <ul>
        <li>Email: {email}</li>
        <li>Password: {password}</li>
      </ul>
    </div>
  );

}
 
export default EditProfile;