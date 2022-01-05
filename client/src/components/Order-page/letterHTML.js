import OrderList from "./Order-list/Order-list";

export const letterSubject = "Thank you for order! You are welcome!";
export const letterHtml = `
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta http-equiv='X-UA-Compatible' content='ie-edge' /> <title>Document</title>
    <style>
        img {
            width: 100%;
        }
        div{
            position: relative;
        }
        h2 {
            position: absolute;
            left: 5%;
            top: 35%;
            color: #dfdfdf;
            font-size: 2.4rem;
            font-weight: 600;
            font-family: "Poppins", sans-serif;
    }
        @media screen and (min-width: 728px) and (max-width: 1200px){
            h2 {
                left: 5%;
                top: 30%;
                font-size: 1.6rem;
                font-weight: 400;
            }
        }
        @media screen and (min-width: 320px) and (max-width: 727px){
            h2 {
                left: 3%;
                top: 30%;
                font-size: 1rem;
                font-weight: 300;
            }
        }
        a {
            background-color: #8d28ad;
            white-space: nowrap;
            width: 40vh;
            font-weight: 500;
            font-size: 22px;
            color: white;
            position: absolute;
            left: 5%;
            top: 60%;
            border-radius: 10px;
            border: none;
            padding: 10px;
            text-align: center;
            text-decoration: none;
            font-family: "Poppins", sans-serif;
        }
        @media screen and (min-width: 728px) and (max-width: 1200px){
            a {
                left: 5%;
                top: 60%;
                width: 25vh;
                padding: 8px;
                text-align: center;
                text-decoration: none;
                font-weight: 400;
                font-size: 16px;
                font-family: "Poppins", sans-serif;
            }
        }
        @media screen and (min-width: 320px) and (max-width: 727px){
            a {
                left: 3%;
                top: 60%;
                width: 15vh;
                padding: 8px;
                text-align: center;
                text-decoration: none;
                font-weight: 300;
                font-size: 10px;
                font-family: "Poppins", sans-serif;
            }
        }
    </style>
</head>
<body>
    <div>
        <img src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1638784698/hero_img_auj8wy.jpg" alt="image">
        <h2>Thank you for order!</h2>  
        <p>${OrderList}</p>
        <a href="http://localhost:3000/">Go back to Manga Store</a>
    </div>
</body>
</html>
`;
