import React from 'react';
import ContactForm from '../components/Form'
import Image from '../components/Image';
import './Contact.css';

function App() {
  return (
    <div>

        <div className='header'>Want to get in touch? Please enquire below.</div>

        <div className='body'>

                <div className='contact'>
                    <ContactForm/>
                </div>

                <div className='contactDetails'>
                    <Image img="computer.jpg" className='compImg'/>
                    <p id='details'>
                        If you are contacting me about creating a new custom program
                        or website, please include some of the following details:
                    </p>
                    <ul id='detailList'>
                        <li>Main purpose of the product •</li>
                        <li>Long term goals •</li>
                        <li>Target Audience •</li>
                    </ul>

                    <p>
                        It's okay to be a general as you want or need for now. I
                        will be in touch with you soon where things can be discussed
                        in further detail.
                    </p>

                </div>

        </div>

    </div>
  );
}

export default App;
