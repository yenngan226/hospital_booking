import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Input from 'src/components/Input'
import LoadingButton from 'src/components/LoadingButton'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, Schema } from 'src/utils/rules'
import { useMutation } from '@tanstack/react-query'
import { AuthApi } from 'src/api/api/auth.api'
import { useContext } from 'react'
import { Appcontext } from 'src/context/app.context'

export type LoginType = Pick<Schema, 'email' | 'password'>
export default function LoginPage() {
  const navigate = useNavigate()
  const { setIsAuthenticated } = useContext(Appcontext)

  const loginSchema = schema.pick(['email', 'password'])
  const loginMutation = useMutation({
    mutationFn: AuthApi.login
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginType>({ resolver: yupResolver(loginSchema) })
  const onSubmit = handleSubmit(async (data) => {
    const res = await loginMutation.mutateAsync(data)
    if (res.data.errCode === 0) {
      setIsAuthenticated(true)
      navigate('/')
    }
  })
  return (
    <div className='bg-blue-600'>
      <div className='container'>
        <div className='grid grid-cols-1 py-10 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-6 shadow-sm md:p-10' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>ĐĂNG NHẬP</div>

              <Input
                register={register}
                name='email'
                placeholder='Email'
                type={'email'}
                className='mt-8'
                errorMessage={errors.email?.message}
              />
              <Input
                register={register}
                name='password'
                placeholder='Mật khẩu'
                type={'password'}
                className='mt-2'
                errorMessage={errors.password?.message}
                autoComplete='on'
              />
              <div className='mt-3'>
                <LoadingButton
                  type='submit'
                  isLoading={false}
                  disabled={false}
                  className='flex w-full items-center justify-center rounded-sm bg-blue-600 py-3 px-2 uppercase text-white transition duration-200 hover:bg-blue-700'
                >
                  ĐĂNG NHẬP
                </LoadingButton>
              </div>
              <div className='mt-8 flex justify-center'>
                <div className='mr-2 text-slate-400'>Chưa có tài khoản?</div>
                <Link to='/register' className='text-red-600'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
