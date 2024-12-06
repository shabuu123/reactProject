import '../styling.css/form.css'
export const Form = () => {
    return (
        <div>
<section>
    <div class="div1">
        <p>CALL ME</p>
        <h1>Have Us Contact You By Filling And Submitting The Form</h1>
        <p class="para1"> You are just a few steps away from a personalized offer.Just fill in the form and sent it to us and we'll get right back with a call to help you decide what servive package works.</p><br/>
        <ul>
            <li>It's very easy just fill in the form so we can call</li><br/>
            <li>During the call we'll require some info about the company</li><br/>
            <li>Don't hesitate to email us for any questions or inquires</li><br/>
        </ul>
        </div>
        <div class="div2">
            <input class="form-input" type="text" placeholder ="Name"/><br/>
            <input class="form-input" type= "text" placeholder="Phone"/><br/>
            <input class="form-input" type = "text" placeholder="Email"/><br/>
            <input class="form-input" type="text" placeholder="Interested In..."/><br/>
            <input class="checkbox" type="checkbox" id="lname"/> <span>I agree with Aria's stated Privacy Policy and Terms &
                Conditions</span><br></br><br></br>
                <button>CALL ME</button>
    </div>
</section>
        </div>
    )
}
