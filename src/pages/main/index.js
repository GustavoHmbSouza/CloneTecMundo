import React, { Component } from 'react';
import { Header, Main, Section, Footer } from './styles';

export default class main extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        loading: false,
    };

    render() {
        const { loading } = this.state;

        return (
            <>
                <Header>
                    <header>
                        <h1>Icone Tecmundo</h1>
                        <h1>Botão de pesquisa</h1>
                    </header>
                    <nav>
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

                <Main>
                    <Section>
                        <article>
                            <img src="#" alt="" />
                            <h1>Confira Preços</h1>
                            <p>
                                Moto G8 Play, G8 Plus, One Macro e E6 Play
                                chegam ao Brasil
                            </p>
                        </article>
                        <section>
                            <article>
                                <img src="#" alt="" />
                                <h1>Confira Preços</h1>
                                <p>
                                    Agenda Netflix: 30 novidades no streaming
                                    entre os dias 24 e 30 de outubro
                                </p>
                            </article>
                            <article>
                                <img src="#" alt="" />
                                <h1>Sem comparação</h1>
                                <p>
                                    5 curiosidades para entender o computador
                                    quântico do Google
                                </p>
                            </article>
                            <article>
                                <img src="#" alt="" />
                                <h1>Novidades</h1>
                                <p>
                                    Pokémon GO: update tem Equipe Rocket,
                                    monstros Galarian e mais
                                </p>
                            </article>
                        </section>
                    </Section>
                    <Section>
                        <section>
                            <nav>
                                <p>Mais Lidas</p>
                                <ul>
                                    <li>Hoje</li>
                                    <li>Semana</li>
                                    <li>Mês</li>
                                </ul>
                            </nav>
                            <article className="primeiraLinha">
                                <img src="#" alt="" />
                                <div className="conteudo">
                                    <p>
                                        Moto G8 Play, G8 Plus, One Macro e E6
                                        Play chegam ao Brasil; confira preços
                                    </p>
                                    <spam>Há 2 horas</spam>
                                </div>
                            </article>
                            <article className="primeiraLinha">
                                <img src="#" alt="" />
                                <div className="conteudo">
                                    <p>
                                        Elon Musk destrói seus celulares
                                        periodicamente; endenta por quê
                                    </p>
                                    <spam>Há 22 horas</spam>
                                </div>
                            </article>
                            <article className="segundaLinha">
                                <img src="#" alt="" />
                                <div className="conteudo">
                                    <p>
                                        Celulares da Xiaomi com 2 câmeras dob a
                                        tela aparece em patente
                                    </p>
                                    <spam>Ontem</spam>
                                </div>
                            </article>
                            <article className="segundaLinha">
                                <img src="#" alt="" />
                                <div className="conteudo">
                                    <p>
                                        Pokémon GO: update tem Equipe Rocket,
                                        monstros Galarian e mais
                                    </p>
                                    <spam>Há 23 horas</spam>
                                </div>
                            </article>
                            <article classNameName="terceiraLinha">
                                <img src="#" alt="" />
                                <div className="conteudo">
                                    <p>
                                        5 curiosidades para entender o
                                        computador quântico do Google
                                    </p>
                                    <spam>Há 21 horas</spam>
                                </div>
                            </article>
                            <article className="terceiraLinha">
                                <img src="#" alt="" />
                                <div className="conteudo">
                                    <p>
                                        Agenda Netflix: 30 novidades no
                                        streaming entre os dias 24 e 30 de
                                        outubro
                                    </p>
                                    <spam>Há 71 horas</spam>
                                </div>
                            </article>
                            <article className="quartaLinha">
                                <img src="#" alt="" />
                                <p>
                                    Tente não rir dessas fotos de atores com
                                    seus dublês
                                </p>
                                <spam>Desafio Mundial</spam>
                            </article>
                            <article className="quartaLinha">
                                <img src="#" alt="" />
                                <p>
                                    Se você tem uma família, é melhor não
                                    comprar esta raça de cão
                                </p>
                                <spam>Soolide</spam>
                            </article>
                            <article className="quartaLinha">
                                <img src="#" alt="" />
                                <p>
                                    Se você ver ondas quadradas no oceano
                                    imediatamente sair da água
                                </p>
                                <spam>90 min</spam>
                            </article>
                        </section>
                        <section>
                            <h1>Matérias Especiais</h1>
                            <article>
                                <img src="#" alt="" />
                                <div className="conteudo">
                                    <h2>Pub</h2>
                                    <p>
                                        AOC Agon: confira o unboxing do monitor
                                        gamer com 0,5 ms de resposta
                                    </p>
                                    <spam>Há 9 dias</spam>
                                </div>
                            </article>
                            <article>
                                <img src="#" alt="" />
                                <div className="conteudo">
                                    <h2>Pub</h2>
                                    <p>
                                        Crie imagens prodissionais para o seu
                                        negócio com os cursos da Udemy
                                    </p>
                                    <spam>Há 9 dias</spam>
                                </div>
                            </article>
                        </section>
                        <section>
                            <article>
                                <img src="#" alt="" />
                                <div className="conteudo">
                                    <p>
                                        Review Motorola One Action: o celular
                                        com GoPro embutida é bom?
                                    </p>
                                    <spam>há 15 dias</spam>
                                </div>
                            </article>
                            <article>
                                <img src="#" alt="" />
                                <div className="conteudo">
                                    <p>
                                        Review Galaxy Note 10+: o melhor
                                        smartphone da Samsung vale o preço?
                                    </p>{' '}
                                    <p>há 15 dias</p>
                                    <spam>há 27 dias</spam>
                                </div>
                            </article>
                            <article>
                                <img src="#" alt="" />
                                <div className="conteudo">
                                    <p>
                                        Review LG K12 Max: um smartphone basicão
                                        de respeito
                                    </p>
                                    <spam>há 29 dias</spam>
                                </div>
                            </article>
                        </section>
                    </Section>
                </Main>
                <Footer>
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
                    <nav>
                        <h1>NZN - Icone</h1>
                        <ul>
                            <li>Sobre</li>
                            <li>Contato</li>
                            <li>Jobs</li>
                            <li>Política de privacidade</li>
                            <li>Licenciamento de conteúdo</li>
                        </ul>
                        <div id="Copyright">
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
                </Footer>
            </>
        );
    }
}
