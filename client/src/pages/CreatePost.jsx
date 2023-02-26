import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets';
import {getRandomPrompt} from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    
  }

  const handleChange = (e) => {

  }

  const handleSurpriseMe = () => {

  }


  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>Create breathtaking images through the DALL-E API.</p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
        <FormField
            labelName='name'
            type='text'
            name='name'
            placeholder='John Doe'
            value={form.prompt}
            handleChange={handleChange}
          />

          <FormField
            labelName='Prompt'
            type='text'
            name='prompt'
            placeholder='The long-lost Star Wars 1990 Japanese Anime'
            value={form.prompt}
            handleChange={handleChange}
            isSurprisedMe
            handleSurpriseMe={handleSurpriseMe}
           />
        </div>
      </form>
    </section>
  )
}

export default CreatePost