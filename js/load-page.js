 // Leitura completa do nosso documento HTML
 $(document).ready(function(){

    // Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML
    
    $('a').click(function(e){
        e.preventDefault()
    
        //Criar uma variável local que receba o atributo href do link
    
        let page = $(this).attr('href')
    
        $('.modal-title').empty()//Limpar o titúlo
        $('.modal-body').empty()//Limpar o Corpo do HTML
    
        //Verificar qual conteúdo eu devo carregar
        switch(page){
            //Se for para abrir a página sobre mim...
            case 'SobreMim': 
                $('.modal-title').append('Sobre mim')
                $('.modal-body').append(`<p>
                Meu nome é Alex Pelloso, tenho 15 anos e moro na cidade de Guaimbê-SP.<br>
                Eu curso o 2° ano do Ensino Médio em Desenvolvimento de Sistemas da Etec de Lins
                </p>`)
                $('#modal-info').modal('show')
            break
    
            //Se for para abrir a página Formação...
            case 'Home': 
                $('.modal-title').append('Página Inical')
                $('.modal-body').append(`<p>
                <b>Home: </b> <br><br>
                Você já está na pagina principal!
                </p>`)
                $('#modal-info').modal('show')
            break
    
            //Se for para abrir a página Trabalhos...
            case 'Projetos': 
                $('.modal-title').append('Projetos')
                $('.modal-body').append(`<p> <b>Futuros Projetos</b> <br><br>
                Modelar e criar um site szoinho para restaurante do meu pai
                </p>`)
                $('#modal-info').modal('show')
            break
    
            //Se for para abrir a página Contatos...
            case 'Contato': 
                $('.modal-title').append('Contatos')
                $('.modal-body').append(`<p>
                <b>Telefone:</b> <br><br>
                +55 14 99705-8363<br>
                pellosoalex@gmail.com
                </p>`)
                $('#modal-info').modal('show')
            break

            //Se for para abrir a página ler mais rocket...
            case 'rocket': 
                $('.modal-title').append('Rocket League')
                $('.modal-body').append(`<p>
                <b>Mais informacões sobre o jogo:</b> <br><br>
                Rocket League, híbrido de alta potência de futebol no estilo arcade e caos veicular da Psyonix, se tornou Free-to-play em todas as plataformas nesta quarta-feira (23).<br>
                 Com a transição para o modelo gratuito, o game também estreou oficialmente na Epic Games Store e foi removido do Steam, a pedido da própria desenvolvedora. Com as mudanças, Rocket League também atingiu a marca de 1 milhão de jogadores conectados simultaneamente, como foi revelado por um dos chefões do estúdio via Twitter.<br>
                 A desenvolvedora também anunciou uma promoção especial para aqueles jogadores que baixarem Rocket League através da Epic Games Store. Todos os usuários que fizerem o download através da plataforma até 23 de outubro serão contemplados com um cupom de R$ 40 para utilizar na loja. Será permitido apenas um cupom por conta, sendo ele intransferível e aplicado diretamente na próxima compra feita pelo jogador. O desconto gerado pelo cupom ficará válido até o dia 1 de novembro e só funcionará para compras acima de R$ 59,99. <br>

                Para comemorar o lançamento Free-to-play, Rocket League vai receber de 26 de setembro a 12 de outubro o evento Llama-Rama. Durante o período, os jogadores poderão desbloquear itens do evento ao completar Desafios. Ao concluir todos os Desafios, os jogadores poderão ser recompensados com o mais novo carro do jogo, o ônibus de Batalha. <br>

                Rocket League é um híbrido de alta potência de futebol no estilo arcade e caos veicular, com controles fáceis de entender e competição fluida e baseada em física. Rocket League está disponível gratuitamente no PC via Epic Games Store, Playstation 4, Xbox One e Nintendo Switch.
                </p>`)
                $('#modal-info').modal('show')
            break

            //Se for para abrir a página ler mais rocket...
            case 'vava': 
                $('.modal-title').append('Valorant')
                $('.modal-body').append(`<p>
                <b>Mais informacões sobre o jogo:</b> <br><br>
                Já sabemos que a Havan Liberty será o primeiro dos dois representantes do Brasil no VALORANT Masters Berlin, que acontecerá entre os dias 10 e 19 de setembro, na capital alemã. Aproveitando o momento decisivo do VCT Challengers, com a Final Brasileira, gostaríamos de relembrar os próximos passos do cenário competitivo até chegar o momento mais esperado do ano por todos os fãs: a disputa do Champions, o grande Mundial do game.<br>
                A grande decisão da Etapa 3 do Challengers Brazil acontece no próximo domingo (22 de agosto) e reunirá Havan Liberty contra uma das cinco outras equipes remanescentes na Chave Inferior do torneio. Nesta sexta, Vivo Keyd x YNG Sharks e Team Vikings x Stars Horizon fazem duelos eliminatórios. Os dois times que vencerem, avançam e se encaram para ver quem enfrenta a FURIA, valendo a vaga na Grande Final - e também em Berlim.<br>

                Porém, é necessário relembrar: em outubro, antes do Champions, teremos um encontro entre times do Brasil e da América Latina valendo mais uma vaga para o Mundial, o Last Chance Qualifier. Ou seja: além das duas equipes nacionais que estarão garantidas pelos Pontos de Circuito, teremos chance de contar com um terceiro representante (que se transformaria em quarto, caso uma organização brasileira conquiste o Masters 3).
                 </p>`)
                $('#modal-info').modal('show')
            break

            //Se for para abrir a página Whatsapp...
            case 'whats': 
                $('.modal-title').append('Whatsapp')
                $('.modal-body').append(`<p>
                <b>Whatsapp:</b> <br><br>
                https://api.whatsapp.com/send?phone=5514997058363
                </p>`)
                $('#modal-info').modal('show')
            break

            //Se for para abrir a página instagram...
            case 'insta': 
                $('.modal-title').append('Instagram')
                $('.modal-body').append(`<p>
                <b>Instagram:</b> <br><br>
                https://www.instagram.com/alex_pelloso/?hl=pt-br
                </p>`)
                $('#modal-info').modal('show')
            break

            //Se for para abrir a página Contatos...
            case 'face': 
                $('.modal-title').append('Facebook')
                $('.modal-body').append(`<p>
                <b>Facebook:</b> <br><br>
                https://www.facebook.com/alexrodrigo.alexjunior/
                </p>`)
                $('#modal-info').modal('show')
            break

    
            default: alert('Link não encontrado');

        }
    
        })
    
    })
