import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { useForm } from 'react-hook-form';
import { IProfileUpdate } from '../types/interface';
import React, { useRef, useState } from 'react';
import { useProfileQuery, useUpdateProfileMutation } from '../service/mypage/useUserQueries';

export default function ProfileUpdate() {
  const { isLoading, data } = useProfileQuery();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [curImg, setCurImg] = useState<string>(data?.profile_image || '');

  const imageRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IProfileUpdate>();

  const mutate = useUpdateProfileMutation();

  const onSubmit = handleSubmit((form: IProfileUpdate) => {
    const formData = new FormData();
    if (selectedFile) {
      formData.append('profileImage', selectedFile);
    } else {
      formData.append('profileImageUrl', data.profile_image);
    }
    formData.append('username', form.username);
    formData.append('curPassword', form.curPassword);
    formData.append('newPassword', form.newPassword);
    formData.append('phoneNumber', String(form.phoneNumber));
    mutate(formData);
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
    setSelectedFile(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0]);
    setCurImg(url);
  };

  return (
    <>
      <div className='flex h-20 px-3 py-3 justify-normal md:px-7'>
        <Link to='/'>
          <div className='p-1 rounded-lg hover:bg-neutral-100 '>
            <img src={logo} alt='logo img' className='w-12 h-12' />
          </div>
        </Link>
      </div>
      <div className='w-full px-5 md:mx-auto md:max-w-5xl'>
        <h2 className='my-12 text-2xl font-bold text-center md:text-3xl'>프로필 수정</h2>
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
              className='flex flex-col items-center justify-center w-full px-5 mb-10 gap-y-3 md:mx-auto md:max-w-5xl'
            >
              <input
                type='file'
                accept='image/*'
                name='thumbnail'
                ref={imageRef}
                onChange={onUploadImage}
                className='hidden'
              />
              <button type='button' onClick={onUploadBtnClick} className='mb-10 btn btn-neutral'>
                이미지 업로드
              </button>

              <input
                {...register('username', {
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
              {errors?.username && <p className='text-red-700'>{errors.username.message}</p>}

              <input
                {...register('curPassword', {
                  required: { message: '필수항목입니다.', value: true },
                })}
                type='password'
                placeholder='현재 비밀번호'
                className='w-full max-w-lg input input-bordered'
              />
              {errors?.curPassword && <p className='text-red-700'>{errors.curPassword.message}</p>}
              <input
                {...register('newPassword', {
                  required: { message: '필수항목입니다.', value: true },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/,
                    message: '숫자, 문자만 포함 (8자 이상, 최대 20자)',
                  },
                })}
                type='password'
                placeholder='새로운 비밀번호'
                className='w-full max-w-lg input input-bordered'
              />
              {errors?.newPassword && <p className='text-red-700'>{errors.newPassword.message}</p>}
              <input
                {...register('confirmPassword', {
                  required: { message: '필수항목입니다.', value: true },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/,
                    message: '숫자, 문자만 포함 (8자 이상, 최대 20자)',
                  },
                })}
                type='password'
                placeholder='새로운 비밀번호'
                className='w-full max-w-lg input input-bordered'
              />
              {watch('newPassword') !== watch('confirmPassword') && (
                <p className='text-red-700'>비밀번호가 일치하지 않습니다.</p>
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
