import React from 'react';
import { Form, Formik } from 'formik';
import { Box, Button } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name='username'
              label='Username'
              placeholder='username'
            />
            <Box mt={4}>
              <InputField
                name='password'
                type='password'
                label='Password'
                placeholder='password'
              />
            </Box>
            <Button
              mt={4}
              colorScheme='teal'
              type='submit'
              isLoading={isSubmitting}
            >
              register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
