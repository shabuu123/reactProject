import '../styling.css/contact.css'
export const Contact = () => {
    return (
        <div>
            <div className='contactDiv'>
                <div className='contact'>
                <p className="title">CONTACT</p>
                <h1>Get In Touch Using The Form</h1>
                <p className='contactPara'>You can stop by our office for a cup of coffee and just use the contact <br></br>form below for any questions and inquiries</p>

                <div className='locationDiv'>
                    <div className='locationSvg'>
                        <svg width="20" height="50" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 4.74 6.39 11.46 6.69 11.78.19.21.5.21.69 0 .3-.32 6.69-7.04 6.69-11.78 0-3.87-3.13-7-7-7zm0 10.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" fill="#00c087" />
                            <circle cx="12" cy="9" r="2.5" fill="#ffffff" /></svg>
                    </div>

                    <div className='div22nd'>
                        <p>22nd Innovative Street, San Francisco, CA 94043, US</p>
                    </div>
                </div>

                <div className='numberDiv'>
                <div className='numberSvg'>
                    <svg width="20" height="100" viewBox="0 0 24 24">
                        <path d="M6.6 10.2c1.4 2.7 3.5 4.8 6.2 6.2l1.4-1.4c.3-.3.8-.4 1.3-.3 1.4.4 3 .6 4.5.6.6 0 1 .5 1 1.1v3.3c0 .6-.5 1-1 1C10 21 3 14 3 5.9c0-.6.4-1 1-1H7c.6 0 1 .4 1 1 0 1.6.2 3.2.6 4.5.1.5.1 1-.3 1.3l-1.4 1.5z" fill="#00c087" /></svg>
                    <p>+81 720 22 126</p></div>
                <div>
                    <div className='numberSvg'>
                        <svg width="20" height="100" viewBox="0 0 24 24">
                            <path d="M6.6 10.2c1.4 2.7 3.5 4.8 6.2 6.2l1.4-1.4c.3-.3.8-.4 1.3-.3 1.4.4 3 .6 4.5.6.6 0 1 .5 1 1.1v3.3c0 .6-.5 1-1 1C10 21 3 14 3 5.9c0-.6.4-1 1-1H7c.6 0 1 .4 1 1 0 1.6.2 3.2.6 4.5.1.5.1 1-.3 1.3l-1.4 1.5z" fill="#00c087" /></svg>
                        <p>+81 720 22 128</p></div>
                    

                    <div className='numberSvg'>
                        <svg width="20" height="100" viewBox="0 0 24 24">
                            <rect width="24" height="24" fill="none" />
                            <path d="M2 4h20v16H2V4z" fill="#00C49F" />
                            <path d="M2 4l10 7L22 4" fill="none" stroke="#ffffff" stroke-width="2" />
                        </svg>
                       <p>office@domain.com</p></div>
                    </div>
                </div>  
                <h2 className='flwAria'>Follow Aria On Social Media</h2>
            </div>
            <div className='form2'>
                <input class="form2-input" type="text" placeholder="Name" /><br />
                <input class="form2-input" type="text" placeholder="Email" /><br />
                <textarea class="form2-inputMsg" type="text" cols="30" rows="40" placeholder="Your message" /><br />
                <input class="checkbox" type="checkbox" id="lname" /> <span>I agree with Aria's stated Privacy Policy and Terms &
                    Conditions</span><br></br><br></br>
                <button>SUBMIT MESSAGE</button>

            </div>
            </div>
            </div>
    )
}