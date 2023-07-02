import React from "react";
import { CircularProgress, Snackbar, Alert, createTheme, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const server_url = import.meta.env.VITE_SERVER_URL;

const theme = createTheme({
  palette: {
    custom: {
      main: '#2BBAFF',
      light: '#64748B',
      contrastText: '#fff',
    },
    white: {
      main: '#FFFFFF',
      light: '#64748B',
      contrastText: '#fff',
    }
  },
});

function Contact() {
  const limit = 2000;
  const val = "";
  const navigate = useNavigate
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comapny, setCompany] = React.useState("");
  const [message, setMessage] = React.useState(val.slice(0, limit));
  const [submitLoading, setSubmitLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [errorSnackbarOpen, setErrorSnackbarOpen] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');
  const [successSnackbarOpen, setSuccessSnackbarOpen] = React.useState(false);
  const setFormattedContent = React.useCallback(
    text => {
      setMessage(text.slice(0, limit));
    },
    [limit, setMessage]
  );
  const handleErrorSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorSnackbarOpen(false);
  }
  const handleSuccessSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccessSnackbarOpen(false);
  }
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitLoading(true);
    fetch(`${server_url}/submit_data`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'company': comapny,
        'message': message
      })
    })
      .then(response => {
        if (response.status === 200) {
          setSubmitLoading(false)
          setSuccessSnackbarOpen(true)
          // setTimeout(() => {
          //   navigate('/')
          // }, 3000);
          setMessage("");
          e.target.reset();
          return response.json()
        } else {
          setSubmitLoading(false)
          setErrorSnackbarOpen(true)
          setMessage("");
          e.target.reset()
          return response.json()
        }
      }).then(data => {
        setErrorMessage(data.msg)
        setSuccessMessage(data.msg)
      })
  }

  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="bg-none lg:bg-no-repeat lg:bg-fit lg:bg-center lg:bg-hero-pattern relative py-5 md:py-10 lg:py-20">
          <div className="container flex flex-col lg:flex-row items-center gap-10">
            <div className="bg-light p-8 m-auto w-full md:w-10/12 lg:w-9/12 rounded-3xl">
              <div className="mb-4 md:mb-8">
                <h2 className="text-[24px] md:text-[40px] font-bold md:pb-4">
                  Get in Touch with Us
                </h2>
                <p className="text-[#999999] text-sm md:text-base px-2 max-w-prose md:w-1/2">
                  We're here to assist you. Reach out to our friendly team for
                  any inquiries or support
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col lg:flex-row gap-5 pb-5">
                    <div className="flex-1" >
                      <input
                        required
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        className="required block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-5 pb-4">
                    <div className="flex-1">
                      <input
                        required
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Company Name"
                        onChange={(e) => setCompany(e.target.value)}
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      />
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-5 pb-4">
                    <div className="flex-1">
                      <textarea
                        required
                        type="text"
                        rows="4"
                        placeholder="Drop a message for us in about 200 words"
                        onChange={(e) => setFormattedContent(e.target.value)}
                        value={message}
                        className="block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-main "
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    value="Submit"
                    className="hover:text-main inline-block  text-lg font-medium hover:bg-transparent bg-main text-light border border-main rounded-xl py-5 px-20 transition-all duration-300"
                    disabled={submitLoading}
                  // href=""
                  >
                    {
                      submitLoading && <CircularProgress size={25} />
                    }
                    {
                      !submitLoading && "Submit"
                    }
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <Snackbar open={errorSnackbarOpen} autoHideDuration={6000} onClose={handleErrorSnackbarClose}>
          <Alert onClose={handleErrorSnackbarClose} variant="filled" severity="error" sx={{ width: '100%' }}>
            {errorMessage}
          </Alert>
        </Snackbar>
        <Snackbar open={successSnackbarOpen} autoHideDuration={6000} onClose={handleSuccessSnackbarClose}>
          <Alert onClose={handleSuccessSnackbarClose} variant="filled" style={{ color: "white", borderRadius: "10px", transform: "translateY(-25px)" }} severity="custom" sx={{ width: '100%' }}>
            {successMessage}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </>
  );
}

export default Contact;
