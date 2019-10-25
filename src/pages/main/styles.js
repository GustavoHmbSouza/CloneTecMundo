import styled from 'styled-components';

const azulPadrao = '#1087ff';

export const Header = styled.header`
    max-width: 1224px;
    margin: auto;

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
                color: ${azulPadrao};
            }

            p {
                font-size: 25px;
                color: ${azulPadrao};

                span {
                    font-weight: bold;
                }
            }

            &:hover svg {
                color: #56abff;
            }

            &:hover p {
                color: #56abff;
            }
        }

        #botaoPesquisar {
            margin-left: 150px;
            display: flex;
            align-items: center;
            border: 1px solid rgb(180, 180, 180);
            padding: 5px 10px;
            background: rgb(250, 249, 255);
            width: 600px;
            border-radius: 6px;

            svg {
                background: rgb(250, 249, 255);
                height: 30px;
                font-size: 20px;
            }

            input {
                margin-left: 10px;
                background: rgb(250, 249, 255);
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
            margin: 20px 3px;
            font-weight: bold;

            li {
                transition: all 0.15s linear;
                cursor: pointer;

                &:hover {
                    color: ${azulPadrao};
                }
            }

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

export const Main = styled.main`
    max-width: 1224px;
    margin: auto;

    #bannersCarrosel {
        display: flex;
        padding: 30px 0;
        border-bottom: 1px solid rgb(224, 224, 224);

        #bannerMain {
            p {
                color: ${azulPadrao};
                font-size: 17px;
                margin-top: 10px;
            }
            h1 {
                font-size: 28px;
                transition: all 0.15s linear;
                margin-top: 10px;
                cursor: pointer;

                &:hover {
                    color: ${azulPadrao};
                }
            }
        }

        article {
            img {
                border-radius: 8px;
                cursor: pointer;
            }
        }

        section {
            margin: 0 0 0 20px;

            article {
                display: flex;
                align-items: center;

                & + article {
                    margin-top: 10px;
                }

                div {
                    margin-left: 20px;
                    p {
                        color: ${azulPadrao};
                        font-size: 17px;
                    }

                    h1 {
                        margin-top: 8px;
                        font-size: 19px;
                        transition: all 0.15s linear;
                        cursor: pointer;

                        &:hover {
                            color: ${azulPadrao};
                        }
                    }
                }
            }
        }
    }

    #materias {
        display: grid;
        grid-template-columns: 7fr 3fr;
        grid-gap: 20px;
        margin-top: 20px;

        #containerMateriasPrincipais {
            nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-right: 5px;

                p {
                    padding: 10px 0;
                    font-size: 20px;
                    transition: all 0.15s linear;
                    cursor: pointer;
                    font-weight: bold;

                    &:hover {
                        color: ${azulPadrao};
                    }
                }

                ul {
                    display: flex;
                    justify-content: center;

                    li {
                        list-style-type: none;
                        height: 32px;
                        padding: 8px 12px;
                        font-weight: bold;
                        transition: all 0.15s linear;
                        cursor: pointer;

                        &:hover {
                            color: rgb(109, 108, 108);
                        }

                        & + li {
                            margin-left: 10px;
                            color: rgb(168, 168, 168);
                        }

                        &:first-child {
                            border-radius: 5px;
                            background: rgb(224, 224, 224);
                            color: rgb(109, 108, 108);
                        }
                    }
                }
            }

            #MateriasPrincipais {
                img {
                    border-radius: 8px;
                    cursor: pointer;
                }

                #coluna2 {
                    display: grid;
                    grid-gap: 20px;
                    grid-template-columns: 1fr 1fr;
                    padding-bottom: 50px;
                    border-bottom: 1px solid rgb(224, 224, 224);

                    article {
                        display: flex;
                        align-items: center;

                        div {
                            margin-left: 20px;

                            p {
                                font-size: 16px;
                                font-weight: bold;
                                color: rgb(71, 71, 71);
                                margin-bottom: 7px;
                                cursor: pointer;

                                &:hover {
                                    color: ${azulPadrao};
                                }
                            }

                            span {
                                color: rgb(128, 128, 128);
                            }
                        }
                    }
                }

                #coluna3 {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 30px;
                    padding-bottom: 25px;
                    border-bottom: 1px solid rgb(224, 224, 224);

                    article {
                        width: 258px;
                        cursor: pointer;

                        img {
                            width: 258px;
                            height: 184px;
                        }

                        p {
                            font-size: 18px;
                            font-weight: bold;
                            transition: all 0.15s linear;
                            margin-bottom: 5px;
                        }

                        &:hover p {
                            color: ${azulPadrao};
                        }

                        span {
                            color: rgb(109, 108, 108);
                        }
                    }
                }
            }
        }

        #materiasSecundarias {
            aside {
                h1 {
                    font-size: 20px;
                    transition: all 0.15s linear;
                    cursor: pointer;

                    &:hover {
                        color: ${azulPadrao};
                    }
                }

                article {
                    display: flex;
                    border-bottom: 1px solid rgb(224, 224, 224);
                    padding: 20px 0;

                    img {
                        border-radius: 8px;
                        cursor: pointer;
                    }

                    div {
                        margin-left: 20px;
                        h2 {
                            color: orange;
                            font-size: 12px;
                        }

                        p {
                            color: rgb(90, 90, 90);
                            font-weight: bold;
                            line-height: 20px;
                            transition: all 0.15s linear;
                            cursor: pointer;

                            &:hover {
                                color: ${azulPadrao};
                            }
                        }

                        span {
                            color: rgb(109, 108, 108);
                        }
                    }
                }

                & + aside {
                    margin-top: 30px;
                }
            }
        }
    }
`;

export const Footer = styled.footer`
    #footerCinzaClaro {
        background: #f6f8fa;

        nav {
            max-width: 1224px;
            margin: auto;
            padding-top: 50px;
            padding-bottom: 30px;
            h1 {
                font-size: 18px;
                color: rgb(63, 63, 63);
            }

            ul {
                display: grid;
                grid-gap: 20px;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                margin-top: 30px;

                li {
                    list-style-type: none;
                    font-size: 16px;
                    color: rgb(109, 108, 108);
                    transition: all 0.15s linear;
                    cursor: pointer;

                    &:hover {
                        color: rgb(63, 63, 63);
                    }
                }
            }
        }
    }

    #footerCinzaEscuro {
        background: rgba(219, 225, 229, 0.5);

        nav {
            &:first-child {
                max-width: 1224px;
                margin: auto;
                padding-top: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 40px;
                border-bottom: 1px solid rgb(224, 224, 224);

                ul {
                    display: flex;
                    align-items: flex-end;

                    #iconeFooter {
                        display: flex;
                        align-items: center;
                        margin-right: 30px;

                        h1 {
                            font-size: 35px;
                            color: rgb(36, 36, 36);
                        }

                        svg {
                            color: ${azulPadrao};
                            font-size: 40px;
                        }
                    }

                    li {
                        list-style-type: none;
                        font-size: 18px;
                        padding: 0px 10px;
                        font-weight: bold;
                        color: rgb(36, 36, 36);
                        transition: all 0.15s linear;
                        cursor: pointer;

                        &:hover {
                            color: ${azulPadrao};
                        }
                    }
                }
            }

            div {
                text-align: right;

                p {
                    font-size: 15px;
                    margin-bottom: 5px;
                }
            }

            &:last-child {
                max-width: 1224px;
                margin: auto;
                margin-top: 30px;
                padding-bottom: 30px;

                ul {
                    display: flex;

                    li {
                        list-style-type: none;
                        font-size: 12px;
                        transition: all 0.15s linear;
                        cursor: pointer;

                        &:hover {
                            color: ${azulPadrao};
                        }

                        & + li {
                            padding-left: 40px;
                        }
                    }
                }
            }
        }
    }
`;
