import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    scroll-behavior: smooth;
}

body{
    background: #0c0f15;
    font-family: 'Poppins', sans-serif;
}

html{

    @media(max-width: 1700px) {
        font-size: 70%;
        .prof2{
            max-width: 500px;
            max-height: 500px;
            border-radius: 500px;
        }
        .number{
            .icon{
                width: 50px;
                height: 50px;
            }
        }
        a{
            p{
                height: 80px;
            }
        }
        
    };

    @media(max-width: 1200px) {
        opacity: 1;
        font-size: 60%;
        .icon {
        .prof2{
            max-width: 150px;
            max-height: 150px;
            border-radius: 500px;
        } 
    };
    //! Tablet View landscape
    @media(max-width: 1024px) {
        font-size: 50%;
        
    };

    //! Tablet view Portrait
    @media(max-width: 856px) {
        font-size: 40%;
        .prof2{
            max-width: 300px;
            max-height: 250px;
            border-radius: 500px;
        } 
        
    };

    @media(max-width: 690px) {
        font-size: 39%;
        .prof2{
            max-width: 300px;
            max-height: 250px;
            border-radius: 500px;
        } 
        
    };

    @media(max-width: 670px) {
        font-size: 35%;
        .prof2, .prof1{
            max-width: 300px;
            max-height: 250px;
            border-radius: 500px;
        } 
        
    };

    @media(max-width: 605px) {
        font-size: 33%;
        .prof2, .prof1{
            max-width: 300px;
            max-height: 250px;
            border-radius: 500px;
        } 
        
    };

    @media(max-width: 575px) {
        font-size: 32.7%;
        .prof2, .prof1{
            max-width: 300px;
            max-height: 250px;
            border-radius: 500px;
        } 
        
    };

    @media(max-width: 568px) {
        font-size: 31.7%;
        .prof2, .prof1{
            max-width: 300px;
            max-height: 250px;
            border-radius: 500px;
        } 
        
    };

    @media(max-width: 550px) {
        font-size: 30.7%;
        .prof2, .prof1{
            max-width: 300px;
            max-height: 250px;
            border-radius: 500px;
        } 
        
    };

    @media(max-width: 550px) {
        font-size: 29%;
        .prof2, .prof1{
            max-width: 300px;
            max-height: 250px;
            border-radius: 500px;
        } 
        
    };

    
    //! Mobile View Portrait
    @media(max-width: 530px) {
        font-size: 27.5%;
        img, .prof2{
           size: 100%
        } 

        p, .number{
            font-size: 2rem;
        }
        .prof2, .prof1{
            max-width: 320px;
            max-height: 210px;
            border-radius: 250px;
        } 
        
    }

}

button{
    font-weight: bold;
    font-size: 1.1rem;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid white;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    border-radius: 15px;
        &:hover{
            background: #282828;
        }
    a{
        text-decoration: none;
        list-style: none;
        color: white;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
}

h3{
    color: white;
}

h4{
    font-weight: bold;
}

span{
    font-weight: bold;
    color: white;

}

a{
    font-size: 1.1rem;
}

p{
    padding: 3rem 0rem;
    color: #ccc;
    letter-spacing: 1.7px;
    font-size: 1.4rem;
    line-height: 150%;
    font-family: 'Poppins', sans-serif;
}

`;

export default GlobalStyles;
