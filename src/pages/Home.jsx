/*eslint-disable*/
import { Formik } from 'formik';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import EmailInput from '../Components/Form/Form 1/Form1';
import NameInput from '../Components/Form/Form 2/Form2';
import Form3 from '../Components/Form/Form 3/Form3';

const Home = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/posts');
  };

  const nextPage = () => setPage(page + 1);
  const previousPage = () => setPage(page - 1);

  const saveDataUrl = 'https://codebuddy.review/submit';
  const saveData = async () => {
    let data1 = localStorage.getItem('emailAndPassword') || '';
    let data2 = localStorage.getItem('nameAndAddress') || '';
    let data3 = localStorage.getItem('countryAndPhone') || '';

    console.log('data', data1, data2, data3);
    let data = {
      'emailId': 'john.doe@gmail.com',
      'password': 'QWerty##11',
      'firstName': 'John',
      'lastName': 'Doe',
      'address': '22/B, Baker Street, London - 10089',
      'countryCode': '+91',
      'phoneNumber': '2225550909',
    };
    const hitApi = await fetch(saveDataUrl, { method: 'post', body: JSON.stringify(data) })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <main>
      <div className="bg-light p-5 mb-5">
        <h1>React + Bootstrap v4</h1>
        <p>React template with Bootstrap version v4</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
      <Container>
        {page === 1 && <EmailInput />}
        {page === 2 && <NameInput />}
        {page === 3 && <Form3 />}
        <br />
        <button
          type="button"
          onClick={previousPage}
          className="m-5 btn btn-dark"
          disabled={page === 1}
        >
          Back
        </button>
        <button type="submit" className="btn btn-dark" onClick={page === 3 ? saveData : {}}>
          Save
        </button>

        <button type="submit" onClick={nextPage} className="m-5 btn btn-dark" disabled={page === 3}>
          Save & Next
        </button>

        <br />
        <Button onClick={onSubmit}>Go to Posts</Button>
      </Container>
    </main>
  );
};

export default Home;
