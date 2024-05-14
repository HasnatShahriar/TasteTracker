import { Link, useNavigate } from "react-router-dom"
import img from '../../assets/register.jpg'
import logo from '../../assets/logo.png'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../provider/AuthProvider"
import toast from "react-hot-toast"
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Helmet } from "react-helmet-async"

const Registration = () => {

  const { createUser, updateUserProfile, user, setUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  // email & password 
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);


    // reset error & success
    setRegisterError('');
    setSuccess('');

    if (password.length < 6) {
      setRegisterError('Password must have at least 6 or more characters')
      return
    }
    else if (!/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)) {
      setRegisterError('Password must have at least one uppercase and one lowercase letter')
      return
    }


    try {
      const result = await createUser(email, password)
      console.log(result);
      await updateUserProfile(name, photo)
      // Optimistic UI Update
      setUser({ ...result?.user, photoURL: photo, displayName: name })
      navigate('/')
      toast.success('Sign UP Successfully')
    } catch (err) {
      console.log(err);
      toast.error(err?.message)
    }
  }

  if (user || loading) return

  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <Helmet>
        <title>TasteTracker | Register</title>
      </Helmet>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            <img
              className='w-auto h-7 sm:h-8'
              src={logo}
              alt=''
            />
          </div>

          <p className='mt-3 text-xl text-center font-bold text-gray-600 '>
            Please Register
          </p>
          <form onSubmit={handleRegister}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Username
              </label>
              <input
                id='name'
                autoComplete='name'
                name='name'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
              />
            </div>

            <div className='mt-4 relative'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type={showPassword ? 'text' : 'password'}
              />
              <span className="absolute bottom-2 right-2 text-2xl" onClick={() => setShowPassword(!showPassword)}>
                {
                  showPassword ? <IoMdEyeOff /> : <IoMdEye />
                }
              </span>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Sign Up
              </button>
            </div>
          </form>



          {
            registerError && <p className="text-red-600 ml-8">{registerError}</p>
          }
          {
            success && <p className="text-green-500 ml-8">{success}</p>
          }





          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  md:w-1/4'></span>

            <Link
              to='/login'
              className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or sign in
            </Link>

            <span className='w-1/5 border-b  md:w-1/4'></span>
          </div>
        </div>
        <div
          className='hidden bg-cover bg-center lg:block lg:w-1/2'
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Registration
