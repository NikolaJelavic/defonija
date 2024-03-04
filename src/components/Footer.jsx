import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-slate-100 p-1 md:p-2 border-slate-300 border-t'>
      <div className='w-11/12 lg:w-2/5 mx-auto flex justify-around'>
        <SocialIcon url="https://www.instagram.com/explore/tags/defonija/" target="_blank" rel="noopener noreferrer" />
        <SocialIcon url="https://www.facebook.com/miha.zadnikar.5/" target="_blank" rel="noopener noreferrer"/>
        <SocialIcon url="https://www.youtube.com/watch?v=JONZZvJ0ZtE&ab_channel=%E2%98%85ToNFilM%E2%98%85" target="_blank" rel="noopener noreferrer"/>
      </div>
    </div>
  );
}