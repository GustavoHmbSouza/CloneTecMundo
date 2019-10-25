import React from 'react';
import { DiReact } from 'react-icons/di';
import { IoIosSearch } from 'react-icons/io';
import { Header, Main, Footer } from './styles';
import {
    imgBCMain,
    imgBC1,
    imgBC2,
    imgBC3,
    ImgMP1,
    ImgMP2,
    ImgMP3,
    ImgMP4,
    ImgMP5,
    ImgMP6,
    ImgMP7,
    ImgMP8,
    ImgMP9,
    imgMS1,
    imgMS2,
    imgMS3,
    imgMS4,
    imgMS5,
} from './img/img';

export default function Html() {
    return (
        <>
            <Header>
                <header>
                    <a href="#">
                        <DiReact />
                        <p>
                            Tec<span>mundo</span>
                        </p>
                    </a>

                    <div id="botaoPesquisar">
                        <IoIosSearch />
                        <input type="text" placeholder="O que você procura?" />
                    </div>
                </header>
                <nav id="segundoMenu">
                    <nav>
                        <ul>
                            <li>Notícias</li>
                            <li>Últimas Notícias</li>
                            <li>Mais Lidas</li>
                            <li>Reviews</li>
                            <li>Tutoriais</li>
                            <li>Udemy</li>
                            <li>Comparar Celulares</li>
                            <li>Cupons de Desconto</li>
                        </ul>

                        <li>Teste de Velocidade</li>
                    </nav>
                </nav>
            </Header>

            <hr id="hrHeader" />

            <Main>
                <section id="bannersCarrosel">
                    <article id="bannerMain">
                        <img src={imgBCMain} alt="" />
                        <p>Confira Preços</p>
                        <h1>
                            Moto G8 Play, G8 Plus, One Macro e E6 Play chegam ao
                            Brasil
                        </h1>
                    </article>
                    <section>
                        <article>
                            <img src={imgBC1} alt="" />
                            <div>
                                <p>Confira Preços</p>
                                <h1>
                                    Agenda Netflix: 30 novidades no streaming
                                    entre os dias 24 e 30 de outubro
                                </h1>
                            </div>
                        </article>
                        <article>
                            <img src={imgBC2} alt="" />
                            <div>
                                <p>Sem comparação</p>
                                <h1>
                                    5 curiosidades para entender o computador
                                    quântico do Google
                                </h1>
                            </div>
                        </article>
                        <article>
                            <img src={imgBC3} alt="" />
                            <div>
                                <p>Novidades</p>
                                <h1>
                                    Pokémon GO: update tem Equipe Rocket,
                                    monstros Galarian e mais
                                </h1>
                            </div>
                        </article>
                    </section>
                </section>
                <section id="materias">
                    <section id="containerMateriasPrincipais">
                        <nav>
                            <p>Mais Lidas</p>
                            <ul>
                                <li>Hoje</li>
                                <li>Semana</li>
                                <li>Mês</li>
                            </ul>
                        </nav>
                        <section id="MateriasPrincipais">
                            <section id="coluna2">
                                <article>
                                    <img src={ImgMP1} alt="" />
                                    <div>
                                        <p>
                                            Moto G8 Play, G8 Plus, One Macro e
                                            E6 Play chegam ao Brasil; confira
                                            preços
                                        </p>
                                        <span>Há 2 horas</span>
                                    </div>
                                </article>
                                <article>
                                    <img src={ImgMP2} alt="" />
                                    <div>
                                        <p>
                                            Elon Musk destrói seus celulares
                                            periodicamente; endenta por quê
                                        </p>
                                        <span>Há 22 horas</span>
                                    </div>
                                </article>
                                <article>
                                    <img src={ImgMP3} alt="" />
                                    <div>
                                        <p>
                                            Celulares da Xiaomi com 2 câmeras
                                            dob a tela aparece em patente
                                        </p>
                                        <span>Ontem</span>
                                    </div>
                                </article>
                                <article>
                                    <img src={ImgMP4} alt="" />
                                    <div>
                                        <p>
                                            Pokémon GO: update tem Equipe
                                            Rocket, monstros Galarian e mais
                                        </p>
                                        <span>Há 23 horas</span>
                                    </div>
                                </article>
                                <article>
                                    <img src={ImgMP5} alt="" />
                                    <div>
                                        <p>
                                            Escadaria do Coringa vira ponto
                                            turístico em Nova York e irrita
                                            moradores
                                        </p>
                                        <span>Há 21 horas</span>
                                    </div>
                                </article>
                                <article>
                                    <img src={ImgMP6} alt="" />
                                    <div>
                                        <p>
                                            Agenda Netflix: 30 novidades no
                                            streaming entre os dias 24 e 30 de
                                            outubro
                                        </p>
                                        <span>Há 71 horas</span>
                                    </div>
                                </article>
                            </section>
                            <section id="coluna3">
                                <article>
                                    <img src={ImgMP7} alt="" />
                                    <p>
                                        Tente não rir dessas fotos de atores com
                                        seus dublês
                                    </p>
                                    <span>Desafio Mundial</span>
                                </article>
                                <article>
                                    <img src={ImgMP8} alt="" />
                                    <p>
                                        Se você tem uma família, é melhor não
                                        comprar esta raça de cão
                                    </p>
                                    <span>Soolide</span>
                                </article>
                                <article>
                                    <img src={ImgMP9} alt="" />
                                    <p>
                                        Se você ver ondas quadradas no oceano
                                        imediatamente sair da água
                                    </p>
                                    <span>90 min</span>
                                </article>
                            </section>
                        </section>
                    </section>
                    <section id="materiasSecundarias">
                        <aside>
                            <h1>Matérias Especiais</h1>
                            <article>
                                <img src={imgMS1} alt="" />
                                <div>
                                    <h2>Pub</h2>
                                    <p>
                                        AOC Agon: confira o unboxing do monitor
                                        gamer com 0,5 ms de resposta
                                    </p>
                                    <span>Há 9 dias</span>
                                </div>
                            </article>
                            <article>
                                <img src={imgMS2} alt="" />
                                <div>
                                    <h2>Pub</h2>
                                    <p>
                                        Crie imagens prodissionais para o seu
                                        negócio com os cursos da Udemy
                                    </p>
                                    <span>Há 9 dias</span>
                                </div>
                            </article>
                        </aside>
                        <aside>
                            <h1>Últimos Reviews</h1>
                            <article>
                                <img src={imgMS3} alt="" />
                                <div>
                                    <p>
                                        Review Motorola One Action: o celular
                                        com GoPro embutida é bom?
                                    </p>
                                    <span>há 15 dias</span>
                                </div>
                            </article>
                            <article>
                                <img src={imgMS4} alt="" />
                                <div>
                                    <p>
                                        Review Galaxy Note 10+: o melhor
                                        smartphone da Samsung vale o preço?
                                    </p>{' '}
                                    <p>há 15 dias</p>
                                    <span>há 27 dias</span>
                                </div>
                            </article>
                            <article>
                                <img src={imgMS5} alt="" />
                                <div>
                                    <p>
                                        Review LG K12 Max: um smartphone basicão
                                        de respeito
                                    </p>
                                    <span>há 29 dias</span>
                                </div>
                            </article>
                        </aside>
                    </section>
                </section>
            </Main>
            <Footer>
                <div id="footerCinzaClaro">
                    <nav>
                        <h1>Categorias</h1>
                        <ul>
                            <li>Software</li>
                            <li>Ciência</li>
                            <li>Windows 10</li>
                            <li>Whatsapp</li>
                            <li>Comparar Celulares</li>
                            <li>Descontos Americanas</li>

                            <li>Produto</li>
                            <li>Cultura Geek</li>
                            <li>Android</li>
                            <li>Celular</li>
                            <li>TecMundo TV</li>
                            <li>Descontos Carrefour</li>

                            <li>Internet</li>
                            <li>Redes Sociais</li>
                            <li>Apple</li>
                            <li>Samsung</li>
                            <li>Nexperts</li>
                            <li>Descontos Casas Bahia</li>

                            <li>Dispositivos Móveis</li>
                            <li>Mercado</li>
                            <li>Google</li>
                            <li>Motorola</li>
                            <li>RSS</li>
                            <li>Descontos Extras</li>

                            <li>Segurança</li>
                            <li>Mobilidade Urbana</li>
                            <li>Facebook</li>
                            <li>Xiaomi</li>
                        </ul>
                    </nav>
                </div>
                <div id="footerCinzaEscuro">
                    <nav>
                        <ul>
                            <div id="iconeFooter">
                                <h1>NZN </h1>
                                <DiReact />
                            </div>
                            <li>Sobre</li>
                            <li>Contato</li>
                            <li>Jobs</li>
                            <li>Política de privacidade</li>
                            <li>Licenciamento de conteúdo</li>
                        </ul>
                        <div>
                            <p>@ Copyright 2019 - No Zebra Network S.A. </p>
                            <span>Todos os direitos reservados.</span>
                        </div>
                    </nav>
                    <nav>
                        <ul>
                            <li>TecMundo</li>
                            <li>Mega Curioso</li>
                            <li>Minha Série</li>
                            <li>Click Jogos</li>
                            <li>The Brief</li>
                            <li>Voxel</li>
                            <li>Marie Curie</li>
                            <li>Baixaki</li>
                            <li>Fika Dika</li>
                            <li>The Hardaware Show</li>
                            <li>Save Coins</li>
                        </ul>
                    </nav>
                </div>
            </Footer>
        </>
    );
}
