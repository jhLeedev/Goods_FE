import { useForm } from 'react-hook-form';
import { FormValueTypes } from '../types/interface';
import EmailAuthModal from '../components/common/EmailAuthModal';
import { useState } from 'react';
import { useAuthEmailMutation } from '../service/signup/useAuthEmailMutation';

export default function SignUp() {
  const [shwoModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValueTypes>();
  const onSubmit = handleSubmit((data) => console.log(data));

  const sendEmail = useAuthEmailMutation();

  const handleAuthEmailClick = async () => {
    sendEmail(watch('email'));
    setShowModal(true);
  };
  return (
    <div className='absolute top-0 left-0 w-full h-screen p-3 mt-24'>
      <div className='flex flex-col items-center w-full'>
        <h1 className='my-3 text-3xl md:text-4xl'>회원가입</h1>

        <div className='flex flex-col p-2 md:w-96'>
          <form
            onSubmit={onSubmit}
            className='flex flex-col items-center justify-center mb-5 gap-y-3'
          >
            <input
              {...register('email', {
                required: { message: '필수항목입니다.', value: true },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                  message: '올바른 이메일 유형이 아닙니다.',
                },
              })}
              type='email'
              placeholder='이메일'
              className='w-full input input-bordered'
            />
            {errors?.email && <p className='text-red-700'>{errors.email.message}</p>}
            <button onClick={handleAuthEmailClick} type='button' className='w-full btn btn-neutral'>
              이메일 인증
            </button>
            {shwoModal && <EmailAuthModal closeModal={() => setShowModal(false)} />}

            <input
              {...register('password', {
                required: { message: '필수항목입니다.', value: true },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/,
                  message: '숫자, 문자만 포함 (8자 이상, 최대 20자)',
                },
              })}
              type='password'
              placeholder='비밀번호'
              className='w-full input input-bordered'
            />
            {errors?.password && <p className='text-red-700'>{errors.password.message}</p>}
            <input
              {...register('confirmPassword', {
                required: { message: '필수항목입니다.', value: true },
              })}
              type='password'
              placeholder='비밀번호 확인'
              className='w-full input input-bordered'
            />
            {watch('password') !== watch('confirmPassword') && (
              <p className='text-red-700'>비밀번호가 일지하지 않습니다.</p>
            )}
            {errors?.confirmPassword && (
              <p className='text-red-700'>{errors.confirmPassword.message}</p>
            )}

            <input
              {...register('nickName', {
                required: { message: '필수항목입니다.', value: true },
                pattern: {
                  value: /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/,
                  message: '한글, 영문, 숫자만 가능하며 2-10자리로 설정',
                },
              })}
              type='text'
              placeholder='닉네임'
              className='w-full input input-bordered'
            />
            {errors?.nickName && <p className='text-red-700'>{errors.nickName.message}</p>}
            <input
              {...register('phoneNumber', {
                required: { message: '필수항목입니다.', value: true },
                pattern: { value: /^[0-9]{11}$/, message: '전화번호를 올바르게 입력해주세요.' },
              })}
              type='text'
              placeholder='전화번호(-을 제회한 숫자만 입력해주세요.)'
              className='w-full input input-bordered'
            />
            {errors?.phoneNumber && <p className='text-red-700'>{errors.phoneNumber.message}</p>}
            <input
              {...register('paymentPassword', {
                required: { message: '필수항목입니다.', value: true },
                pattern: { value: /^[0-9]{4}$/, message: '4자리 숫자만 입력해주세요.' },
              })}
              type='password'
              placeholder='간편 결제 비밀번호'
              className='w-full input input-bordered'
            />
            {errors?.paymentPassword && (
              <p className='text-red-700'>{errors.paymentPassword.message}</p>
            )}
            <button className='w-full btn btn-neutral'>가입 완료</button>
          </form>
        </div>
      </div>
    </div>
  );
}
