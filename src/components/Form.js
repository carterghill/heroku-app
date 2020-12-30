import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "./Button"
import './Form.css';

var self;

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  name: '',
                        email: '',
                        phone: '',
                        website: '',
                        company: '',
                        message: '',
                        nameError: false,
                        emailError: false,
                        msgError: false,
                        sendError: false,
                        sending: false,
                        sent: false
                    };
    }

    submit = (event) => {

        if (this.state.sending) {
            return;
        }

        this.setState({sending: true});
        this.setState({sent: false});
        this.setState({sendError: false});

        if (this.state.name === '') {
            this.setState({nameError: true});
            this.setState({sending: false});
            return;
        } else {
            this.setState({nameError: false});
        }
        if (this.state.email === '') {
            this.setState({emailError: true});
            this.setState({sending: false});
            return;
        } else {
            this.setState({emailError: false});
        }
        if (this.state.message === '') {
            this.setState({msgError: true});
            this.setState({sending: false});
            return;
        } else {
            this.setState({msgError: false});
        }

        var variables = {
            from_name: this.state.name,
            from_email: this.state.email,
            from_phone: this.state.phone,
            from_website: this.state.website,
            from_company: this.state.company,
            message: this.state.message
        };

        self = this;
        window.emailjs.send('service_946epj8', 'template_v54mx1r', variables)
            .then(function(response) {
               console.log('SUCCESS!');
               self.setState({sendError: false});
               self.setState({sending: false});
               self.setState({sent: true});
            }, function(error) {
               console.log('FAILED');
               self.setState({sendError: true});
               self.setState({sending: false});
            });

    }

    getName = (event) => {
        this.setState({name: event.target.value});
    }

    getEmail = (event) => {
        this.setState({email: event.target.value});
    }

    getPhone = (event) => {
        this.setState({phone: event.target.value});
    }

    getWebsite = (event) => {
        this.setState({website: event.target.value});
    }

    getCompany = (event) => {
        this.setState({company: event.target.value});
    }

    getMessage = (event) => {
        this.setState({message: event.target.value});
    }

    render() {
        return (
            <form className='form'>

                <div className='formHeader'>Contact Form</div>

                <div className='formInput'>Name:</div>
                <div className={ this.state.nameError ? 'inputError active' : 'inputError' }>
                    * You must enter a name
                </div>
                <input className='formInput'
                    type='text'
                    onChange={this.getName}
                />

                <div className='formInput'>Email:</div>
                <div className={ this.state.emailError ? 'inputError active' : 'inputError' }>
                    * You must enter an email
                </div>
                <input className='formInput'
                    type='text'
                    onChange={this.getEmail}
                />

                <div className='formInput'>Phone (optional):</div>
                <input className='formInput'
                    type='text'
                    onChange={this.getPhone}
                />

                <div className='formInput'>Website (optional):</div>
                <input className='formInput'
                    type='text'
                    onChange={this.getWebsite}
                />

                <div className='formInput'>Company (optional):</div>
                <input className='formInput'
                    type='text'
                    onChange={this.getCompany}
                />

                <div className='formInput'>Message:</div>
                <div className={ this.state.msgError ? 'inputError active' : 'inputError' }>
                    *
                </div>
                <textarea id='message' className='formInput'
                    type='text'
                    onChange={this.getMessage}
                />

                <div className={ this.state.sendError ? 'inputError active' : 'inputError' }>
                    * Error sending email. Please save your message in a seperate document and refresh the page
                </div>
                <div className={ this.state.sending ? 'sending active' : 'sending' }>
                    * Sending...
                </div>
                <div className={ this.state.sent ? 'sent active' : 'sent' }>
                    * Email sent!
                </div>
                <p onClick={this.submit} id='submitButton' className='btn'>Submit</p>

            </form>
        );
    }
}

export default ContactForm
