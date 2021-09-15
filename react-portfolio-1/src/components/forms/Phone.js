import styled from "styled-components";

function Phone() {
    return <FormStyle>
        <label for='userEmail'>Phone Number:
            <input id='userEmail'type='tel' placeholder="0161-123-4567"></input>
        </label><br />
        <label for='userEmail'>Your Name:
            <input id='userName'type='text' placeholder="Billy Smith"></input>
        </label><br />
        <label id='label'for='message'>Message: 
            <textarea id='message'type='text'></textarea>
        </label>
        <button>Submit</button>
        <h3>...Or</h3>
        <p>Message me directly at <b>bwilde96@yahoo.co.uk</ b> for any offers, colaborations or opportunities you would like to discuss</p>
    </FormStyle>
}

export default Phone;

const FormStyle = styled.form`
position: relative;
    margin-top: -40%;
    box-sizing: border-box;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 55rem;

    label{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        min-width: 90%;
        margin: 2%;
        color: white;
        font-size: 1.6rem;
        font-weight: bold;
        input, #message {
            display: flex;
            width: min(100% ,30rem);
            height: 4vh;
            font-size: 1.2rem;
            margin-left: 2%;
            border-radius: 5px;
            box-shadow: 0px 0px 0px 2px white;
        }
        #userName {
        }
        #message {
            height: 18vh;
        }
    }
    button {
        display: inline-block
        box-sizing: border-box;
        font-size: 2rem;
        background: lightgrey;
        color: white;
        border-radius: 10px;
        padding: 2% 4%;
        margin-top: 3%;
        margin-left: -20%;
        border-color: white;
        cursor: pointer;
        &:hover {
            background: lightblue;
        }
    }
    h3 {
        display: inline-block;
        color: white;
        margin: 5%;
        margin-right: -15%;
        margin-top: -6%;
        font-size: 2rem;
        
    }

    p {
        max-width: 38ch;
        color: white;
        margin-top: -3%;
        margin-bottom: 12%;
        font-size: 2rem;
        text-align: center;
    }

    @media (max-width: 600px) {
        label{
            font-size: 1.2rem;
        }
        input, #message{
            margin-top: 2%;
            margin-left: -40%;
        }
        button {
            padding: 4% 8%;
            margin-top: 8%;
            margin-left: 0%;
        }
        h3 {
            margin: 5%;
            margin-top: 6%;
            font-size: 1.2rem;
            
        }
        p {
            font-size: 1.2rem;
            max-width: 30ch;
            margin-bottom: 25%;
        }
    }
`