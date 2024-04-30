import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { getProfileInfo, updateProfileInfo } from '../store/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { FormValueTypes } from '../types/interface';
import React, { useRef, useState } from 'react';

export default function ProfileUpdate() {
  const { isLoading, data } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileInfo,
  });
  const [curImg, setCurImg] = useState(data?.profile_image || '');
  const imageRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValueTypes>();

  const { mutate } = useMutation({
    mutationFn: updateProfileInfo,
    onSuccess: () => {
      navigate('/mypage');
    },
  });

  const onSubmit = handleSubmit((form: FormValueTypes) => {
    mutate(form);
  });

  const onUploadBtnClick = () => {
    if (!imageRef.current) {
      return;
    }
    imageRef.current.click();
  };

  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event) => {
      setCurImg(event.target?.result);
    };
  };

  return (
    <>
      <div className='h-20 px-3 py-3 flex justify-normal md:px-7'>
        <Link to='/'>
          <div className='p-1 rounded-lg hover:bg-neutral-100 '>
            <img src={logo} alt='logo img' className='w-12 h-12' />
          </div>
        </Link>
      </div>
      <div className='w-full px-5 md:mx-auto md:max-w-5xl'>
        <h2 className='text-center my-12 text-2xl font-bold md:text-3xl'>프로필 수정</h2>
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            <div className='flex justify-center mb-6'>
              <div className='avatar'>
                <div className='w-28 rounded-xl md:w-36'>
                  <img src={curImg} alt='profile_image' />
                </div>
              </div>
            </div>
            <form
              onSubmit={onSubmit}
              className='w-full mb-10 px-5 flex flex-col items-center justify-center gap-y-3 md:mx-auto md:max-w-5xl'
            >
              <input
                type='file'
                accept='image/*'
                name='thumbnail'
                ref={imageRef}
                onChange={onUploadImage}
                className='hidden'
              />
              <button onClick={onUploadBtnClick} className='btn btn-neutral mb-10'>
                이미지 업로드
              </button>

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
                defaultValue={data.username}
                className='w-full max-w-lg input input-bordered'
              />
              {errors?.nickName && <p className='text-red-700'>{errors.nickName.message}</p>}

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
                className='w-full max-w-lg input input-bordered'
              />
              {errors?.password && <p className='text-red-700'>{errors.password.message}</p>}
              <input
                {...register('confirmPassword', {
                  required: { message: '필수항목입니다.', value: true },
                })}
                type='password'
                placeholder='비밀번호 확인'
                className='w-full max-w-lg input input-bordered'
              />
              {watch('password') !== watch('confirmPassword') && (
                <p className='text-red-700'>비밀번호가 일지하지 않습니다.</p>
              )}
              {errors?.confirmPassword && (
                <p className='text-red-700'>{errors.confirmPassword.message}</p>
              )}

              <input
                {...register('phoneNumber', {
                  required: { message: '필수항목입니다.', value: true },
                  pattern: { value: /^[0-9]{11}$/, message: '전화번호를 올바르게 입력해주세요.' },
                })}
                type='text'
                placeholder='전화번호(-을 제회한 숫자만 입력해주세요.)'
                defaultValue={data.phoneNumber}
                className='w-full max-w-lg input input-bordered'
              />
              {errors?.phoneNumber && <p className='text-red-700'>{errors.phoneNumber.message}</p>}
              <button className='w-full max-w-lg btn btn-neutral'>가입 완료</button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
