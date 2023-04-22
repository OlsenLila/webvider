import { useState, useEffect } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';


async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    }
}

function ContactForm() {
    const [ enteredEmail, setenteredEmail ] = useState('');
    const [ enteredName, setenteredName ] = useState('');
    const [enteredContact, setenteredContact] = useState('');
    const [ enteredMessage, setenteredMessage ] = useState('');
    const [ requestStatus, setRequestStatus ] = useState(); //pending, success, error
    const [ requestError, setrequestError ] = useState();

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setrequestError(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    async function sendMessageHandler(event) {
        event.preventDefault();

        setRequestStatus('pending');

        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                contact: enteredContact,
                message: enteredMessage
            });
            setRequestStatus('success');
            setenteredMessage('');
            setenteredContact('');
            setenteredEmail('');
            setenteredName('');
        } catch (error) {
            setrequestError(error.message);
            setRequestStatus('error');
        }
    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending Message',
            message: 'Your message is on its way'
        };
    }

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully!'
        };
    }

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError,
        }
    }

    return (
        <section className= {classes.contact}>
            <div>
                <h3>Connecting you to success - Let's get in touch!</h3>
                <h2>Contact Codevider</h2>
            </div>  
                <form className={classes.form} onSubmit={sendMessageHandler}>
                    <div className={classes.controls}>
                        <div className={classes.control}>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" required value={enteredEmail} onChange={(event) => setenteredEmail(event.target.value)} />
                        </div>
                        <div className={classes.control}>  
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" required value={enteredName} onChange={(event) => setenteredName(event.target.value)} />
                        </div>
                        <div className={classes.control}>  
                            <label htmlFor="contact">Contact Number</label>
                            <input type="text" id="contact" required value={enteredContact} onChange={(event) => setenteredContact(event.target.value)} />
                        </div>
                    </div>    
                        <div className={classes.control}>
                        <label htmlFor="messagge">Your Requirements</label>
                        <textarea id="messagge" rows="5" required value={enteredMessage} onChange={(event) => setenteredMessage(event.target.value)}></textarea>
                        </div>
                        <div className={classes.actions}>
                            <button>Send Your Request</button>
                        </div>
                </form>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <dic className={classes.maps}>

            </dic>
        </section>
    );
}

export default ContactForm;