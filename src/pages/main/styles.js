import styled from 'styled-components';

export const Header = styled.header`
    max-width: 1224px;
    margin: auto;
    background: #f5f5dc;

    header {
        display: flex;
        align-items: center;
        padding: 15px 0;
        border-bottom: 1px solid rgb(224, 224, 224);

        a {
            display: flex;
            align-items: center;
            text-decoration: none;

            svg {
                font-size: 50px;
                color: #1087ff;
            }

            p {
                font-size: 25px;
                color: #1087ff;

                span {
                    font-weight: bold;
                }
            }
        }

        #botaoPesquisar {
            margin-left: 150px;
            display: flex;
            align-items: center;
            border: 1px solid rgb(180, 180, 180);
            padding: 5px 10px;
            background: #f8f4f4;
            width: 600px;
            border-radius: 8px;

            svg {
                background: #f8f4f4;
                height: 30px;
                font-size: 20px;
            }

            input {
                margin-left: 10px;
                background: #f8f4f4;
                border: none;
                height: 30px;
                color: rgb(66, 66, 66);
            }
        }
    }

    #segundoMenu {
        display: flex;

        nav {
            display: flex;
            list-style-type: none;
            justify-content: space-between;
            width: 100%;
            margin: 20px 20px;
            font-weight: bold;

            ul {
                display: flex;

                li {
                    list-style-type: none;
                    margin-right: 35px;

                    &:first-child {
                        margin-right: 50px;
                    }
                }
            }

            span {
            }
        }
    }
`;

export const Main = styled.main``;

export const Section = styled.section``;

export const Footer = styled.footer``;
